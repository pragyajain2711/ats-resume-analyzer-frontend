import { FileText } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">

        <FileText className="logo-icon" size={38} />

        <div className="logo-text">
          <h2>ATS</h2>
          <span>Resume Analyzer</span>
        </div>

      </div>

      <ul className="nav-links">

        <li><a href="#home">Home</a></li>

        <li><a href="#features">Features</a></li>

        <li><a href="#how">How It Works</a></li>

        <li><a href="#about">About</a></li>

      </ul>

      <div className="nav-buttons">

        <a href="#analyze" className="analyze-btn-nav">
          Analyze Resume
        </a>

      </div>

    </nav>
  );
}

export default Navbar;