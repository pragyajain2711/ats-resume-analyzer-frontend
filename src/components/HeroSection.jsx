import { FileText, Bot, ChartColumn } from "lucide-react";

function HeroSection() {
  return (
    <section className="hero-section" id="home">

      <div className="hero-left">

        <span className="hero-tag">
          AI Powered Resume Analysis
        </span>

        <h1>
          Improve Your Resume
          <br />
          Before You Apply
        </h1>

        <p>
          Upload your resume, compare it with any job description,
          discover missing keywords, and boost your ATS score
          in just a few seconds.
        </p>

        <a href="#analyze" className="hero-btn">

    Analyze Resume →

</a>

      </div>

      <div className="hero-right">

        <div className="hero-card">

          <FileText size={40} />

          <span>Resume</span>

        </div>

        <div className="hero-arrow">↓</div>

        <div className="hero-card">

          <Bot size={40} />

          <span>ATS Analysis</span>

        </div>

        <div className="hero-arrow">↓</div>

        <div className="hero-card">

          <ChartColumn size={40} />

          <span>Match Score</span>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;