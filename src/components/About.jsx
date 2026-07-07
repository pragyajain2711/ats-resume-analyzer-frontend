import {
  Brain,
  ShieldCheck,
  Zap,
  FileCheck,
  Sparkles,
  Target,
} from "lucide-react";

function About() {
  const features = [
    {
      icon: <Brain size={35} />,
      title: "AI Powered",
      description:
        "Analyze your resume using AI and compare it with the job description.",
    },
    {
      icon: <Target size={35} />,
      title: "ATS Optimized",
      description:
        "Improve ATS compatibility by identifying important keywords.",
    },
    {
      icon: <Zap size={35} />,
      title: "Fast Analysis",
      description:
        "Get detailed ATS analysis and suggestions in just a few seconds.",
    },
    {
      icon: <ShieldCheck size={35} />,
      title: "Secure",
      description:
        "Your uploaded resume is processed securely and is not permanently stored.",
    },
    {
      icon: <FileCheck size={35} />,
      title: "Professional Reports",
      description:
        "Receive a complete report with score, skills and recommendations.",
    },
    {
      icon: <Sparkles size={35} />,
      title: "Smart Suggestions",
      description:
        "Get personalized recommendations to improve your resume.",
    },
  ];

  return (
    <section className="about-section" id="about">

      <div className="section-heading">
        <h2>Why Choose SmartATS?</h2>

        <p>
          Everything you need to optimize your resume before applying.
        </p>
      </div>

      <div className="about-grid">

        {features.map((item, index) => (

          <div className="about-card" key={index}>

            <div className="about-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default About;