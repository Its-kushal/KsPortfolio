import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PowerSequence from "../components/terminal/PowerSequence";

describe("PowerSequence", () => {
    it("renders suspended state when systemStatus is powered_off", () => {
        const setStatus = vi.fn();
        render(<PowerSequence systemStatus="powered_off" setSystemStatus={setStatus} />);
        expect(screen.getByText("SYSTEM SUSPENDED")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Power On/i })).toBeInTheDocument();
    });

    it("triggers booting when Power On button is clicked", async () => {
        const user = userEvent.setup();
        const setStatus = vi.fn();
        render(<PowerSequence systemStatus="powered_off" setSystemStatus={setStatus} />);
        const powerBtn = screen.getByRole("button", { name: /Power On/i });
        await user.click(powerBtn);
        expect(setStatus).toHaveBeenCalledWith("booting");
    });

    it("triggers booting when Enter key is pressed in powered_off state", () => {
        const setStatus = vi.fn();
        render(<PowerSequence systemStatus="powered_off" setSystemStatus={setStatus} />);
        fireEvent.keyDown(window, { key: "Enter" });
        expect(setStatus).toHaveBeenCalledWith("booting");
    });

    it("does not trigger booting on other keys when powered_off", () => {
        const setStatus = vi.fn();
        render(<PowerSequence systemStatus="powered_off" setSystemStatus={setStatus} />);
        fireEvent.keyDown(window, { key: "Space" });
        expect(setStatus).not.toHaveBeenCalled();
    });

    it("cleans up keydown listener on unmount", () => {
        const removeSpy = vi.spyOn(window, "removeEventListener");
        const setStatus = vi.fn();
        const { unmount } = render(
            <PowerSequence systemStatus="powered_off" setSystemStatus={setStatus} />,
        );
        unmount();
        expect(removeSpy).toHaveBeenCalledWith("keydown", expect.any(Function));
    });
});
