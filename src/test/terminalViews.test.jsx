import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TerminalProjectsView from "../components/terminal/TerminalProjectsView";
import TerminalContactView from "../components/terminal/TerminalContactView";
import TerminalCareerView from "../components/terminal/TerminalCareerView";
import {
    getSimulatedCommitHash,
    getSimulatedCareerTag,
} from "../utils/careerGitMetadata";
import { careerData } from "../data/portfolioData";

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

    describe("TerminalCareerView", () => {
        it("renders canonical command header exactly", () => {
            render(<TerminalCareerView />);
            expect(
                screen.getByText("$ git log --career"),
            ).toBeInTheDocument();
        });

        it("renders one milestone per careerData entry with stable hashes, tags, and roles", () => {
            render(<TerminalCareerView />);

            // Check that every careerData entry is rendered
            careerData.forEach((item, index) => {
                expect(screen.getByText(item.role)).toBeInTheDocument();
                expect(screen.getByText(item.organization)).toBeInTheDocument();
                expect(screen.getByText(item.period)).toBeInTheDocument();

                // Check deterministic 7-character hexadecimal hash
                const hash = getSimulatedCommitHash(item);
                expect(hash).toMatch(/^[0-9a-f]{7}$/);
                expect(screen.getByText(new RegExp(`commit ${hash}`))).toBeInTheDocument();

                // Check career-specific tag format
                const tag = getSimulatedCareerTag(item, index);
                expect(tag).toMatch(/^career-\d{4}\.\d{2}$/);
                expect(screen.getByText(new RegExp(`tag: ${tag}`))).toBeInTheDocument();
            });
        });

        it("marks only the newest entry with HEAD -> career/main exactly once", () => {
            render(<TerminalCareerView />);
            const headMatches = screen.getAllByText(/HEAD -> career\/main/);
            expect(headMatches).toHaveLength(1);
        });

        it("renders diff-style additions for each highlight", () => {
            render(<TerminalCareerView />);
            const allHighlights = careerData.flatMap((item) => item.highlights || []);
            expect(allHighlights.length).toBeGreaterThan(0);

            allHighlights.forEach((highlight) => {
                expect(screen.getByText(highlight)).toBeInTheDocument();
            });

            const diffPlusSymbols = screen.getAllByText("+");
            expect(diffPlusSymbols.length).toBe(allHighlights.length);
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

