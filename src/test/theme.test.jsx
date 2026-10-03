import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider, useTheme } from "../context/ThemeContext";

function TestConsumer() {
    const { viewMode, toggleViewMode, setViewMode } = useTheme();
    return (
        <div>
            <span data-testid="view-mode">{viewMode}</span>
            <button onClick={toggleViewMode}>Toggle View</button>
            <button onClick={() => setViewMode("standard")}>Set Standard</button>
        </div>
    );
}

describe("ThemeContext", () => {
    it("provides default viewMode of terminal", () => {
        render(
            <ThemeProvider>
                <TestConsumer />
            </ThemeProvider>,
        );
        expect(screen.getByTestId("view-mode")).toHaveTextContent("terminal");
    });

    it("toggles viewMode between terminal and standard", async () => {
        const user = userEvent.setup();
        render(
            <ThemeProvider>
                <TestConsumer />
            </ThemeProvider>,
        );
        const toggleBtn = screen.getByRole("button", { name: "Toggle View" });
        await user.click(toggleBtn);
        expect(screen.getByTestId("view-mode")).toHaveTextContent("standard");
        await user.click(toggleBtn);
        expect(screen.getByTestId("view-mode")).toHaveTextContent("terminal");
    });

    it("allows direct setting of viewMode", async () => {
        const user = userEvent.setup();
        render(
            <ThemeProvider>
                <TestConsumer />
            </ThemeProvider>,
        );
        const setBtn = screen.getByRole("button", { name: "Set Standard" });
        await user.click(setBtn);
        expect(screen.getByTestId("view-mode")).toHaveTextContent("standard");
    });
});
