import { Mail } from "lucide-react";
import { SiGithub, SiHuggingface, SiKaggle } from "react-icons/si";
import LinkedinIcon from "../ui/LinkedinIcon";
import { personalInfo } from "../../data/portfolioData";

export default function ContactDrawer({ idCardShape }) {
    const getIcon = (name) => {
        switch (name) {
            case "Email":
                return <Mail size={22} />;
            case "GitHub":
                return <SiGithub size={22} />;
            case "LinkedIn":
                return <LinkedinIcon size={22} />;
            case "HuggingFace":
                return <SiHuggingface size={22} />;
            case "Kaggle":
                return <SiKaggle size={22} />;
            default:
                return <Mail size={22} />;
        }
    };

    return (
        <div
            className={`w-full bg-[var(--primary-color)] text-white dark:text-black 
                        shadow-lg p-6 flex flex-wrap justify-center gap-6 z-20 
                        transition-all duration-300 ${idCardShape}`}
        >
            {personalInfo.socialLinks.map((item) => (
                <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:scale-105 transition-transform font-bold text-sm sm:text-base"
                >
                    {getIcon(item.name)} {item.name}
                </a>
            ))}
        </div>
    );
}
