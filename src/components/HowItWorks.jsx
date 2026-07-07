function HowItWorks() {

    const steps = [

        {
            number: "01",
            title: "Upload Resume",
            description:
                "Upload your resume in PDF or DOCX format."
        },

        {
            number: "02",
            title: "Paste Job Description",
            description:
                "Copy and paste the job description you're applying for."
        },

        {
            number: "03",
            title: "AI Analysis",
            description:
                "Our AI compares your resume with the job description."
        },

        {
            number: "04",
            title: "Get ATS Report",
            description:
                "View your ATS score, missing keywords and suggestions."
        }

    ];

    return (

        <section className="how-section" id="how">

            <div className="section-heading">

                <h2>How It Works</h2>

                <p>

                    Improve your resume in just four simple steps.

                </p>

            </div>

            <div className="steps-container">

                {

                    steps.map((step)=> (

                        <div className="step-card" key={step.number}>

                            <span>{step.number}</span>

                            <h3>{step.title}</h3>

                            <p>{step.description}</p>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default HowItWorks;