import { useState, useEffect } from "react";

export default function DetailsPane() {
    const [uptime, setUptime] = useState(0);
    const [resolution, setResolution] = useState(
        `${window.innerWidth}x${window.innerHeight}`,
    );
    const [currentTime, setCurrentTime] = useState(
        new Date().toLocaleTimeString(),
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setUptime((prev) => prev + 1);
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        const handleResize = () => {
            setResolution(`${window.innerWidth}x${window.innerHeight}`);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            clearInterval(timer);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const minutes = Math.floor(uptime / 60);
    const seconds = uptime % 60;
    const formattedUptime = `${minutes}m ${seconds}s`;

    return (
        <div className="@container flex flex-col items-center justify-start p-2 h-full w-full overflow-hidden">
            <pre className="text-terminal-c font-bold leading-none mb-2 text-center text-[clamp(6px,3cqh,14px)]">
                {`
██   ██ ██   ██
██  ██  ██  ██ 
█████   █████  
██  ██  ██  ██ 
██   ██ ██   ██
`}
            </pre>
            <div className="w-full max-w-[250px] text-[clamp(10px,4.5cqh,16px)] space-y-[clamp(1px,0.5cqh,4px)]">
                <p>
                    <span className="text-white font-bold">OS:</span> Kushal K
                </p>
                <p>
                    <span className="text-white font-bold">Host:</span>{" "}
                    Web-Terminal
                </p>
                <p>
                    <span className="text-white font-bold">Uptime:</span>{" "}
                    {formattedUptime}
                </p>
                <p>
                    <span className="text-white font-bold">Local Time:</span>{" "}
                    {currentTime}
                </p>
                <p>
                    <span className="text-white font-bold">Res:</span>{" "}
                    {resolution}
                </p>
            </div>

            <div className="mt-[clamp(4px,2cqh,16px)] flex flex-col gap-[clamp(1px,0.5cqh,4px)] w-full max-w-[250px]">
                <div className="flex">
                    <div className="h-[clamp(4px,3cqh,16px)] w-1/4 bg-black"></div>
                    <div className="h-[clamp(4px,3cqh,16px)] w-1/4 bg-red-500"></div>
                    <div className="h-[clamp(4px,3cqh,16px)] w-1/4 bg-green-500"></div>
                    <div className="h-[clamp(4px,3cqh,16px)] w-1/4 bg-yellow-500"></div>
                </div>
                <div className="flex">
                    <div className="h-[clamp(4px,3cqh,16px)] w-1/4 bg-blue-500"></div>
                    <div className="h-[clamp(4px,3cqh,16px)] w-1/4 bg-purple-500"></div>
                    <div className="h-[clamp(4px,3cqh,16px)] w-1/4 bg-cyan-500"></div>
                    <div className="h-[clamp(4px,3cqh,16px)] w-1/4 bg-white"></div>
                </div>
            </div>
        </div>
    );
}
