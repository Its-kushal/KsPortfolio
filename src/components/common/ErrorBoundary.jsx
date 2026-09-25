import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    handleReload = () => {
        this.setState({ hasError: false, error: null });
        if (typeof window !== "undefined") {
            window.location.reload();
        }
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-[#050505] text-[#309fcf] font-mono flex flex-col items-center justify-center p-6 text-center select-none">
                    <div className="max-w-lg p-6 border-2 border-[#309fcf] bg-black/60 shadow-[0_0_20px_rgba(48,159,207,0.4)] rounded-lg">
                        <div className="text-red-500 font-bold text-xl mb-2">
                            [ KERNEL PANIC: SYSTEM EXCEPTION ]
                        </div>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                            An unexpected UI error occurred. The terminal session has been suspended for system safety.
                        </p>
                        <div className="p-2 mb-4 bg-gray-900 border border-gray-800 text-xs text-left text-red-400 font-mono overflow-auto max-h-28">
                            {this.state.error?.message || "Unknown Runtime Error"}
                        </div>
                        <button
                            type="button"
                            onClick={this.handleReload}
                            className="px-6 py-2 border-2 border-[#309fcf] bg-[#309fcf] text-black font-bold uppercase tracking-wider hover:bg-white hover:border-white transition-colors cursor-pointer"
                        >
                            Reboot System
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
