import { useState, useEffect } from "react";
const shutdownLogs = [
    "[ OK ] Stopping network services...",
    "[ OK ] Unmounting filesystems: /dev/sda1",
    "[ OK ] Saving session data...",
    "[ OK ] Sending SIGTERM to all processes...",
    "System halted. Powering down.",
];
const bootLogs = [
    "Booting from Hard Disk...",
    "Loading Linux kernel...",
    "Mounting root filesystem...",
    "[ OK ] Reached target Local File Systems.",
    "[ OK ] Started Network Manager.",
    "Initializing Terminal UI...",
];
export default function PowerSequence({ systemStatus, setSystemStatus }) {
    const [lines, setLines] = useState([]);
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        let isCancelled = false;
        const runShutdown = async () => {
            setLines([]);
            for (const log of shutdownLogs) {
                if (isCancelled) return;
                setLines((prev) => [...prev, log]);
                await new Promise((r) =>
                    setTimeout(r, 300 + Math.random() * 300),
                );
            }
            if (!isCancelled) {
                setTimeout(() => setSystemStatus("powered_off"), 1000);
            }
        };
        const runBoot = async () => {
            setLines([]);
            for (const log of bootLogs) {
                if (isCancelled) return;
                setLines((prev) => [...prev, log]);
                await new Promise((r) =>
                    setTimeout(r, 200 + Math.random() * 200),
                );
            }
            for (let i = 0; i <= 100; i += 2) {
                if (isCancelled) return;
                setProgress(i);
                await new Promise((r) => setTimeout(r, 20));
            }
            if (!isCancelled) {
                setTimeout(() => setSystemStatus("running"), 500);
            }
        };
        if (systemStatus === "shutting_down") runShutdown();
        if (systemStatus === "booting") runBoot();
        return () => {
            isCancelled = true;
        };
    }, [systemStatus, setSystemStatus]);
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (systemStatus === "powered_off" && e.key === "Enter") {
                setSystemStatus("booting");
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [systemStatus, setSystemStatus]);
    if (systemStatus === "powered_off") {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#050505]">
                <div className="mb-4 text-gray-500 font-mono text-sm tracking-widest">
                    SYSTEM SUSPENDED
                </div>
                <button
                    onClick={() => setSystemStatus("booting")}
                    className="px-8 py-3 border-2 border-terminal-c bg-terminal-c text-black font-mono font-extrabold uppercase tracking-widest outline-none animate-pulse shadow-[0_0_20px_rgba(48,159,207,0.6)] cursor-pointer hover:bg-white hover:border-white focus:bg-white focus:border-white transition-all duration-300"
                >
                    [ Power On ]
                </button>
                <div className="mt-4 text-terminal-c/50 font-mono text-xs">
                    (Press ENTER or Click)
                </div>
            </div>
        );
    }
    return (
        <div className="w-full h-full bg-[#050505] text-terminal-c font-mono p-4 flex flex-col items-center justify-center overflow-hidden select-none">
            <div className="w-full max-w-2xl space-y-1">
                {lines.map((line, idx) => (
                    <div
                        key={idx}
                        className="text-[clamp(14px,1.5vw,20px)] opacity-90"
                    >
                        {line}
                    </div>
                ))}
                {systemStatus === "booting" && progress > 0 && (
                    <div className="mt-6 flex flex-col sm:flex-row sm:items-center w-full gap-2">
                        <span className="w-32 font-bold">
                            Booting: [{progress.toString().padStart(3, " ")}%]
                        </span>
                        <div className="flex-grow h-4 border border-terminal-c p-[1px]">
                            <div
                                className="h-full bg-terminal-c transition-all duration-75"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
