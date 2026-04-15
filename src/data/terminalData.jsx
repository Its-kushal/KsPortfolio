import ResumeView from "../components/terminal/ResumeView";

export const terminalContent = [
    {
        id: "about",
        label: "$ cat about_me",
        output: "Loading about_me.txt... \n\nHi, I am Kushal. I build high-performance systems.",
    },
    {
        id: "projects",
        label: "$ ls projects/",
        output: "drwxr-xr-x  Kernel-Smasher\ndrwxr-xr-x  React-Dashboard",
    },
    {
        id: "resume",
        label: "$ cat resume.pdf",
        output: <ResumeView />,
    },
    {
        id: "contact",
        label: "$ ./contact.sh",
        output: "Email: kushal.khivasara@outlook.com\nGitHub: github.com/Its-kushal",
    },
    {
        id: "theme",
        label: "$ ./switch_gui.sh",
        action: "toggle_theme",
        output: "Switching to Standard UI...",
    },
];
