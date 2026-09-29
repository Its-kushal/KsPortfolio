import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TerminalLayout from "../components/terminal/TerminalLayout";
import { ThemeProvider } from "../context/ThemeContext";

function renderTerminal() {
    return render(
        <ThemeProvider>
            <TerminalLayout />
        </ThemeProvider>,
    );
}

describe("TerminalLayout Component", () => {
    beforeEach(() => {
        window.innerWidth = 1200;
    });

    afterEach(() => {
        window.innerWidth = 1200;
    });

    it("renders boot sequence initially and allows skipping to running with Escape", () => {
        renderTerminal();
        expect(screen.getByText(/Booting from Hard Disk/i)).toBeInTheDocument();

        // Press Escape to skip boot sequence
        fireEvent.keyDown(window, { key: "Escape" });

        // Terminal commands are immediately rendered
        expect(
            screen.getByRole("button", { name: /Execute \$ cat about_me/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /Execute \$ ls projects\//i }),
        ).toBeInTheDocument();
    });

    it("allows clicking a command to execute it", async () => {
        const user = userEvent.setup();
        renderTerminal();

        // Skip boot sequence to running
        fireEvent.keyDown(window, { key: "Escape" });

        const projectsBtn = screen.getByRole("button", {
            name: /Execute \$ ls projects\//i,
        });

        await user.click(projectsBtn);

        expect(screen.getByText(/\$ ls -la projects\//i)).toBeInTheDocument();
        expect(
            screen.getByText("TradingAlgos: High-Frequency Trading Engine"),
        ).toBeInTheDocument();
    });

    it("supports keyboard arrow navigation and enter execution", () => {
        renderTerminal();
        fireEvent.keyDown(window, { key: "Escape" });

        // Active command starts at 0 ($ cat about_me)
        // Press Down arrow to navigate to index 1 ($ ls projects/)
        fireEvent.keyDown(window, { key: "ArrowDown" });
        // Press Enter to execute selected command ($ ls projects/)
        fireEvent.keyDown(window, { key: "Enter" });

        expect(screen.getByText(/\$ ls -la projects\//i)).toBeInTheDocument();
        expect(
            screen.getByText("TradingAlgos: High-Frequency Trading Engine"),
        ).toBeInTheDocument();
    });
});
