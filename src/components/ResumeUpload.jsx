function ResumeUpload({ resume, setResume }) {

    const handleFileChange = (e) => {
        setResume(e.target.files[0]);
    };

    return (

        <div className="upload-card">

            <h3>Upload Resume</h3>

            <div className="upload-box">

                <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange} 
                />

                {resume && (
                    <p>
                        Selected File: {resume.name}
                    </p>
                )}

            </div>

        </div>

    );
}

export default ResumeUpload;