import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TerminalProjectsView from "../components/terminal/TerminalProjectsView";
import TerminalContactView from "../components/terminal/TerminalContactView";

describe("Terminal Views", () => {
    describe("TerminalProjectsView", () => {
        it("renders projects list with headers and tags", () => {
            render(<TerminalProjectsView />);
            expect(screen.getByText(/\$ ls -la projects\//)).toBeInTheDocument();
            expect(
                screen.getByText("TradingAlgos: High-Frequency Trading Engine"),
            ).toBeInTheDocument();
            expect(
                screen.getByText("WholeSaleManager (ERP Suite)"),
            ).toBeInTheDocument();
            expect(
                screen.getByText("Bank Customer Churn Prediction"),
            ).toBeInTheDocument();
        });

        it("renders working repository links with safe attributes", () => {
            render(<TerminalProjectsView />);
            const repoLinks = screen.getAllByRole("link", {
                name: /View Repository/i,
            });
            expect(repoLinks.length).toBeGreaterThanOrEqual(3);
            repoLinks.forEach((link) => {
                expect(link).toHaveAttribute("target", "_blank");
                expect(link).toHaveAttribute("rel", "noreferrer");
                expect(link.getAttribute("href")).toMatch(/^https?:\/\//);
            });
        });
    });

    describe("TerminalContactView", () => {
        it("renders all social contact links", () => {
            render(<TerminalContactView />);
            expect(screen.getByRole("link", { name: /Email/i })).toBeInTheDocument();
            expect(screen.getByRole("link", { name: /GitHub/i })).toBeInTheDocument();
            expect(screen.getByRole("link", { name: /LinkedIn/i })).toBeInTheDocument();
        });

        it("allows clicking copy button and shows visual feedback", async () => {
            const user = userEvent.setup();
            render(<TerminalContactView />);

            const copyButtons = screen.getAllByRole("button", {
                name: /Copy .* to clipboard/i,
            });
            expect(copyButtons.length).toBeGreaterThan(0);

            await user.click(copyButtons[0]);
            expect(screen.getByText(/Copied .* to clipboard!/i)).toBeInTheDocument();
        });

        it("handles keyboard copy with Ctrl+C", async () => {
            render(<TerminalContactView />);
            const emailLink = screen.getByRole("link", { name: /Email/i });
            fireEvent.keyDown(emailLink, { key: "c", ctrlKey: true });
            await waitFor(() => {
                expect(
                    screen.getByText(/Copied Email to clipboard!/i),
                ).toBeInTheDocument();
            });
        });
    });
});
