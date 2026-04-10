export default function Pane({ title, children, className = "" }) {
    return (
        <div
            className={`border border-terminal-green flex flex-col bg-[#0a0a0a] overflow-hidden w-full h-full ${className}`}
        >
            <div className="bg-terminal-green text-black font-bold px-2 py-1 flex justify-between items-center text-xs uppercase tracking-wider">
                <span>{title}</span>
            </div>
            <div className="p-2 flex-grow overflow-y-auto">{children}</div>
        </div>
    );
}
