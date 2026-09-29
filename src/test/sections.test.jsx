import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectsSection from "../components/standard/ProjectsSection";
import CertificatesSection from "../components/standard/CertificatesSection";
import CareerSection from "../components/standard/CareerSection";
import Header from "../components/standard/Header";
import { ThemeProvider } from "../context/ThemeContext";

describe("Standard Section Components", () => {
    describe("ProjectsSection", () => {
        it("renders verified projects from projectsData", () => {
            render(<ProjectsSection />);
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

        it("renders technology badges for each project", () => {
            render(<ProjectsSection />);
            expect(screen.getAllByText("Python").length).toBeGreaterThan(0);
            expect(screen.getAllByText("PostgreSQL").length).toBeGreaterThan(0);
        });

        it("renders code view links with safe target and rel attributes", () => {
            render(<ProjectsSection />);
            const codeLinks = screen.getAllByRole("link", {
                name: /View Code/i,
            });
            expect(codeLinks.length).toBeGreaterThanOrEqual(3);
            codeLinks.forEach((link) => {
                expect(link).toHaveAttribute("target", "_blank");
                expect(link).toHaveAttribute("rel", "noreferrer");
            });
        });
    });

    describe("CertificatesSection", () => {
        it("renders verified certificates from Internshala", () => {
            render(<CertificatesSection />);
            expect(screen.getByText("Python Training")).toBeInTheDocument();
            expect(screen.getByText("ReactJS Development")).toBeInTheDocument();
            expect(screen.getByText("C / C++ Programming")).toBeInTheDocument();
            expect(
                screen.getByText("Data Structures & Algorithms (DSA)"),
            ).toBeInTheDocument();
            expect(
                screen.getByRole("heading", { name: "Prompt Engineering" }),
            ).toBeInTheDocument();
            expect(
                screen.getAllByText("Internshala Trainings").length,
            ).toBe(5);
        });
    });

    describe("CareerSection", () => {
        it("renders career milestones and highlights", () => {
            render(<CareerSection />);
            expect(
                screen.getByText("Freelance Full Stack Developer"),
            ).toBeInTheDocument();
            expect(
                screen.getByText(
                    "Independent Software & Systems Developer",
                ),
            ).toBeInTheDocument();
            expect(
                screen.getByText(/June 2025 – Present/),
            ).toBeInTheDocument();
        });
    });

    describe("Header", () => {
        it("renders name, avatar, and triggers contact toggle", async () => {
            const user = userEvent.setup();
            const setContact = vi.fn();
            const setMobile = vi.fn();
            render(
                <ThemeProvider>
                    <Header
                        showContactLinks={false}
                        setShowContactLinks={setContact}
                        isMobileMenuOpen={false}
                        setIsMobileMenuOpen={setMobile}
                        idCardShape="rounded-2xl"
                    />
                </ThemeProvider>,
            );

            expect(
                screen.getByText("Er. Kushal Khivasara"),
            ).toBeInTheDocument();
            const showBtn = screen.getByRole("button", {
                name: "Show Contacts",
            });
            await user.click(showBtn);
            expect(setContact).toHaveBeenCalledWith(true);
        });
    });
});
