import api from "../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart3,
  SearchCheck,
  Sparkles,
  FileSearch,
  FileText,
  Target,
} from "lucide-react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ResumeUpload from "../components/ResumeUpload";
import JobDescription from "../components/JobDescription";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import About from "../components/About";
import LoadingOverlay from "../components/LoadingOverlay";

function Home() {

    const [resume, setResume] = useState(null);
    const [jobDescription, setJobDescription] = useState("");
const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleAnalyze = async () => {

    if (!resume) {
        alert("Please upload your resume.");
        return;
    }

    if (!jobDescription.trim()) {
        alert("Please enter Job Description.");
        return;
    }

    try {

       const formData = new FormData();

formData.append("resume", resume);
formData.append("jobDescription", jobDescription);
setLoading(true);
const response = await api.post(
    "/analyze",
    formData,
    {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }
);

navigate("/result", {
    state: response.data,
});
setLoading(false);
    } catch (error) {

        console.log(error);

if (error.response) {
    alert(error.response.data.message || "Server Error");
}
else if (error.request) {
    alert("Cannot connect to backend. Please make sure the server is running.");
}
else {
    alert("Unexpected error occurred.");
}

    }

};

    return (
        <>
            <Navbar />

            <HeroSection />

           <section className="analysis-section" id="analyze">

                <div className="section-heading">

                    <h2>Ready to Analyze Your Resume?</h2>

                    <p>
Upload your resume and paste the job description to receive an AI-powered ATS score, missing keywords, and personalized improvement suggestions.
</p>

                </div>

                <div className="analysis-container">

                    <ResumeUpload
                        resume={resume}
                        setResume={setResume}
                    />

                    <JobDescription
                        jobDescription={jobDescription}
                        setJobDescription={setJobDescription}
                    />

                </div>

            </section>

            <div className="analyze-container">

            {
loading && (

<div className="loading-box">

    <div className="loader"></div>

    <p>Analyzing Resume using AI...</p>

</div>

)
}
             <button
    className="analyze-btn"
    onClick={handleAnalyze}
    disabled={loading}
>
    {loading ? "Analyzing..." : "Analyze Resume"}
</button>

            </div>

           <section className="features-section" id="features">

                <div className="section-heading">

                    <h2>Why Choose ATS Resume Analyzer?</h2>

                    <p>
                        Everything you need to optimize your resume for modern ATS systems.
                    </p>

                </div>

      <div className="feature-cards">

    <div className="feature-card">
        <BarChart3 className="feature-icon" />
        <h3>ATS Match Score</h3>
        <p>Instantly calculate how well your resume matches the job description.</p>
    </div>

    <div className="feature-card">
        <SearchCheck className="feature-icon" />
        <h3>Keyword Analysis</h3>
        <p>Identify missing keywords that improve ATS compatibility.</p>
    </div>

    <div className="feature-card">
        <Sparkles className="feature-icon" />
        <h3>AI Suggestions</h3>
        <p>Receive personalized AI recommendations to strengthen your resume.</p>
    </div>

    <div className="feature-card">
        <FileSearch className="feature-icon" />
        <h3>Resume Parsing</h3>
        <p>Automatically extract important information from your resume.</p>
    </div>

    <div className="feature-card">
        <Target className="feature-icon" />
        <h3>Job Matching</h3>
        <p>Compare your resume directly with any job description.</p>
    </div>

    <div className="feature-card">
        <FileText className="feature-icon" />
        <h3>Professional Report</h3>
        <p>View your ATS score, matched skills, missing keywords and suggestions.</p>
    </div>

</div>

           </section>
           {loading && <LoadingOverlay />}

<HowItWorks />

<About />

<Footer />

        </>
    );
}

export default Home;