const ResumeView = () => (
    <div className="w-full h-full flex flex-col pointer-events-auto">
        <div className="flex-grow border border-terminal-green/30 bg-gray-900">
            <iframe
                src={`${import.meta.env.BASE_URL}Resume.pdf`}
                className="w-full h-full"
                title="Resume"
            />
        </div>
    </div>
);

export default ResumeView;