import { describe, it, expect } from "vitest";
import {
    personalInfo,
    projectsData,
    certificatesData,
    careerData,
    technicalSkills,
} from "../data/portfolioData";

describe("portfolioData source of truth", () => {
    it("exports complete personalInfo without placeholder strings", () => {
        expect(personalInfo.name).toBe("Kushal Khivasara");
        expect(personalInfo.role).toBe("Software Developer");
        expect(personalInfo.email).toBe("kushal.khivasara@outlook.com");
        expect(personalInfo.socialLinks.length).toBeGreaterThan(0);
        personalInfo.socialLinks.forEach((link) => {
            expect(link.name).toBeTruthy();
            expect(link.url).toMatch(/^(https?:\/\/|mailto:)/);
        });
    });

    it("exports valid projectsData with unique IDs and working repo links", () => {
        expect(projectsData.length).toBeGreaterThanOrEqual(3);
        const ids = new Set();
        projectsData.forEach((project) => {
            expect(project.id).toBeTruthy();
            expect(ids.has(project.id)).toBe(false);
            ids.add(project.id);

            expect(project.title).toBeTruthy();
            expect(project.description).toBeTruthy();
            expect(project.technologies.length).toBeGreaterThan(0);
            expect(project.repositoryUrl).toMatch(/^https?:\/\//);
            if (project.demoUrl) {
                expect(project.demoUrl).toMatch(/^https?:\/\//);
            }
        });
    });

    it("exports certificatesData with valid titles and issuers", () => {
        expect(certificatesData.length).toBeGreaterThan(0);
        certificatesData.forEach((cert) => {
            expect(cert.id).toBeTruthy();
            expect(cert.title).toBeTruthy();
            expect(cert.issuer).toBeTruthy();
        });
    });

    it("exports careerData with non-empty milestones and highlights", () => {
        expect(careerData.length).toBeGreaterThan(0);
        careerData.forEach((item) => {
            expect(item.id).toBeTruthy();
            expect(item.role).toBeTruthy();
            expect(item.organization).toBeTruthy();
            expect(item.highlights.length).toBeGreaterThan(0);
        });
    });

    it("exports structured technical skills categories", () => {
        expect(technicalSkills.length).toBeGreaterThan(0);
        technicalSkills.forEach((cat) => {
            expect(cat.category).toBeTruthy();
            expect(cat.skills.length).toBeGreaterThan(0);
        });
    });
});
