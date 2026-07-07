import { CheckCircle2 } from "lucide-react";

function SkillCard({ skills }) {
  return (
    <div className="skills-card">

      <h2 className="card-title">
        Matched Skills
      </h2>

      <div className="skills-list">

        {skills.map((skill, index) => (
          <div className="skill-chip" key={index}>
            <CheckCircle2 size={18} />
            {skill}
          </div>
        ))}

      </div>

    </div>
  );
}

export default SkillCard;