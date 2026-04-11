export default function Pane({ title, children, className = "" }) {
    return (
        // THE FIX: tabIndex={0} makes it selectable via the Tab key.
        // focus-within:border-white makes the border turn white when selected!
        <div
            tabIndex={0}
            className={`border border-terminal-green flex flex-col bg-[#0a0a0a] overflow-hidden w-full h-full transition-colors focus-within:border-white focus-within:shadow-[0_0_10px_rgba(255,255,255,0.2)] outline-none ${className}`}
        >
            <div className="bg-terminal-green text-black font-bold px-2 py-1 flex justify-between items-center text-xs uppercase tracking-wider">
                <span>{title}</span>
            </div>
            <div className="p-2 flex-grow overflow-y-auto">{children}</div>
        </div>
    );
}
