import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App Root Component", () => {
    const originalInnerWidth = window.innerWidth;

    beforeEach(() => {
        window.innerWidth = 1200;
    });

    afterEach(() => {
        window.innerWidth = originalInnerWidth;
    });

    it("renders successfully in desktop viewport", () => {
        const { container } = render(<App />);
        expect(container).toBeInTheDocument();
    });

    it("attaches and cleans up resize listener on unmount", () => {
        const addSpy = vi.spyOn(window, "addEventListener");
        const removeSpy = vi.spyOn(window, "removeEventListener");
        const { unmount } = render(<App />);
        expect(addSpy).toHaveBeenCalledWith("resize", expect.any(Function));
        unmount();
        expect(removeSpy).toHaveBeenCalledWith("resize", expect.any(Function));
    });

    it("enforces standard layout when screen width is under 768px", () => {
        window.innerWidth = 500;
        render(<App />);
        // When in standard layout, the header displays the developer's name
        expect(screen.getByText("Er. Kushal Khivasara")).toBeInTheDocument();
    });
});
