export default function Pane({ title, children, className = "" }) {
    return (
        <div
            className={`border-2 border-terminal-green flex flex-col bg-[#0a0a0a] overflow-hidden ${className}`}
        >
            <div className="bg-terminal-green text-black font-bold px-3 py-1 flex justify-between items-center text-sm uppercase tracking-wider">
                <span>{title}</span>
            </div>

            <div className="p-4 flex-grow overflow-y-auto">{children}</div>
        </div>
    );
}
