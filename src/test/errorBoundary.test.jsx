import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from "../components/common/ErrorBoundary";

function ProblemChild({ shouldThrow }) {
    if (shouldThrow) {
        throw new Error("Simulated test explosion");
    }
    return <div>Normal Content</div>;
}

describe("ErrorBoundary", () => {
    it("renders children when no error occurs", () => {
        render(
            <ErrorBoundary>
                <ProblemChild shouldThrow={false} />
            </ErrorBoundary>,
        );
        expect(screen.getByText("Normal Content")).toBeInTheDocument();
    });

    it("renders fallback UI when child throws", () => {
        // Suppress expected console.error during error boundary test
        const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

        render(
            <ErrorBoundary>
                <ProblemChild shouldThrow={true} />
            </ErrorBoundary>,
        );

        expect(
            screen.getByText(/KERNEL PANIC: SYSTEM EXCEPTION/i),
        ).toBeInTheDocument();
        expect(screen.getByText(/Simulated test explosion/i)).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /Reboot System/i }),
        ).toBeInTheDocument();

        consoleSpy.mockRestore();
    });
});
