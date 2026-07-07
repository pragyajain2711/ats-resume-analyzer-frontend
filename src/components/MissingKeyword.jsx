import { TriangleAlert } from "lucide-react";

function MissingKeyword({ skills }) {
  return (
    <div className="skills-card">

      <h2 className="card-title">
        Missing Keywords
      </h2>

      <div className="skills-list">

        {skills.map((skill, index) => (
          <div className="missing-chip" key={index}>
            <TriangleAlert size={18} />
            {skill}
          </div>
        ))}

      </div>

    </div>
  );
}

export default MissingKeyword;