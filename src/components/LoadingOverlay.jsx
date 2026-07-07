function LoadingOverlay() {
    return (
        <div className="loading-overlay">

            <div className="loading-card">

                <div className="loader"></div>

                <h2>Analyzing Your Resume...</h2>

                <p>📄 Extracting resume content</p>
                <p>🤖 Comparing with Job Description</p>
                <p>📊 Calculating ATS Score</p>
                <p>✨ Generating AI Suggestions</p>

            </div>

        </div>
    );
}

export default LoadingOverlay;