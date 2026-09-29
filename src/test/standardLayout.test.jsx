import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StandardLayout from "../components/standard/StandardLayout";
import { ThemeProvider } from "../context/ThemeContext";

function renderStandard() {
    return render(
        <ThemeProvider>
            <StandardLayout />
        </ThemeProvider>,
    );
}

describe("StandardLayout", () => {
    it("renders profile header and title", () => {
        renderStandard();
        expect(screen.getByText("Er. Kushal Khivasara")).toBeInTheDocument();
        expect(screen.getByText("Software Developer")).toBeInTheDocument();
    });

    it("renders about section by default", () => {
        renderStandard();
        expect(
            screen.getByText("I build high-performance systems."),
        ).toBeInTheDocument();
    });

    it("switches active section when tab buttons are clicked", async () => {
        const user = userEvent.setup();
        renderStandard();

        // Standard layout has desktop nav buttons
        const projectsButtons = screen.getAllByRole("button", {
            name: "Projects",
        });
        await user.click(projectsButtons[0]);
        expect(screen.getAllByText("Projects").length).toBeGreaterThan(0);

        const careerButtons = screen.getAllByRole("button", {
            name: "Career",
        });
        await user.click(careerButtons[0]);
        expect(screen.getAllByText("Career").length).toBeGreaterThan(0);
    });

    it("toggles contact links drawer", async () => {
        const user = userEvent.setup();
        renderStandard();

        const showContactsBtn = screen.getByRole("button", {
            name: "Show Contacts",
        });
        await user.click(showContactsBtn);

        expect(screen.getByText("Hide Contacts")).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /Email/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /GitHub/i })).toBeInTheDocument();
    });

    it("renders resume download link with proper attributes", () => {
        renderStandard();
        const downloadLinks = screen.getAllByRole("link", {
            name: /Resume/i,
        });
        expect(downloadLinks.length).toBeGreaterThan(0);
        expect(downloadLinks[0]).toHaveAttribute("download", "Resume.pdf");
    });

    it("renders valid sitemap link targeting sitemap.xml in a new tab", () => {
        renderStandard();
        const sitemapLink = screen.getByRole("link", { name: "Sitemap" });
        expect(sitemapLink).toHaveAttribute("target", "_blank");
        expect(sitemapLink).toHaveAttribute("rel", "noreferrer");
        expect(sitemapLink.getAttribute("href")).toContain("sitemap.xml");
    });
});
