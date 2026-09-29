import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import DetailsPane from "../components/terminal/DetailsPane";

describe("DetailsPane", () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it("renders system diagnostics info", () => {
        render(<DetailsPane />);
        expect(screen.getByText("OS:")).toBeInTheDocument();
        expect(screen.getByText("Kushal K")).toBeInTheDocument();
        expect(screen.getByText("Host:")).toBeInTheDocument();
        expect(screen.getByText("Web-Terminal")).toBeInTheDocument();
        expect(screen.getByText("Uptime:")).toBeInTheDocument();
    });

    it("increments uptime over time", () => {
        render(<DetailsPane />);
        expect(screen.getByText(/0m 0s/)).toBeInTheDocument();

        act(() => {
            vi.advanceTimersByTime(5000);
        });

        expect(screen.getByText(/0m 5s/)).toBeInTheDocument();
    });

    it("cleans up timer and resize listener on unmount", () => {
        const removeSpy = vi.spyOn(window, "removeEventListener");
        const { unmount } = render(<DetailsPane />);
        unmount();
        expect(removeSpy).toHaveBeenCalledWith("resize", expect.any(Function));
    });
});
