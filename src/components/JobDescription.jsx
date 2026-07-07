function JobDescription({
    jobDescription,
    setJobDescription
}) {

    return (

        <div className="job-card">

            <h3>Job Description</h3>

            <textarea

                value={jobDescription}

                placeholder="Paste Job Description"

                onChange={(e) =>
                    setJobDescription(e.target.value)
                }

            />

            <p>
                Characters : {jobDescription.length}
            </p>

        </div>

    );
}

export default JobDescription;