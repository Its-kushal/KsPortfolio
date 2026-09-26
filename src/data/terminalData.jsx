import ResumeView from "../components/terminal/ResumeView";
import TerminalProjectsView from "../components/terminal/TerminalProjectsView";
import TerminalContactView from "../components/terminal/TerminalContactView";
import { personalInfo } from "./portfolioData";

export const terminalContent = [
    {
        id: "about",
        label: "$ cat about_me",
        output: personalInfo.aboutParagraphs.join("\n\n"),
    },
    {
        id: "projects",
        label: "$ ls projects/",
        output: <TerminalProjectsView />,
    },
    {
        id: "resume",
        label: "$ cat resume.pdf",
        output: <ResumeView />,
    },
    {
        id: "contact",
        label: "$ ./contact",
        output: <TerminalContactView />,
    },
    {
        id: "theme",
        label: "$ ./switch_gui.sh",
        action: "toggle_theme_execute",
        output: "Switch to Standard UI",
    },
    {
        id: "exit",
        label: "$ poweroff",
        action: "poweroff_app_execute",
        output: "Shut down system",
    },
];
