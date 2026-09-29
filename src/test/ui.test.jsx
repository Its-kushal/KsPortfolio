import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Pane from "../components/ui/Pane";
import ResumeView from "../components/terminal/ResumeView";

describe("UI Components", () => {
    describe("Pane", () => {
        it("renders title and children", () => {
            render(
                <Pane title="Test Pane">
                    <div>Pane Content</div>
                </Pane>,
            );
            expect(screen.getByText("Test Pane")).toBeInTheDocument();
            expect(screen.getByText("Pane Content")).toBeInTheDocument();
        });
    });

    describe("ResumeView", () => {
        it("renders iframe pointing to Resume.pdf", () => {
            render(<ResumeView />);
            const iframe = screen.getByTitle("Resume");
            expect(iframe).toBeInTheDocument();
            expect(iframe.getAttribute("src")).toContain("Resume.pdf");
        });
    });
});
