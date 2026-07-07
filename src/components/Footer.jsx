function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-logo">

          <h2>ATS Resume Analyzer</h2>

          <p>
            AI-powered resume analysis to improve your ATS score,
            identify missing keywords, and receive personalized
            recommendations before applying.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>

            <li><a href="#home">Home</a></li>

            <li><a href="#features">Features</a></li>

            <li><a href="#how">How It Works</a></li>

            <li><a href="#about">About</a></li>

          </ul>

        </div>

        <div className="footer-links">

          <h3>Technology</h3>

          <ul>

            <li>React</li>

            <li>Spring Boot</li>

            <li>Gemini AI</li>

            <li>MySQL</li>

          </ul>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 ATS Resume Analyzer | Built with React, Spring Boot & Gemini AI

      </div>

    </footer>
  );
}

export default Footer;