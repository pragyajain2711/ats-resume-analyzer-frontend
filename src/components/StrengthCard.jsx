import { Award } from "lucide-react";

function StrengthCard({ strengths }) {
  return (
    <div className="dashboard-card">

      <h2 className="card-title">
        AI Strengths
      </h2>

      <div className="skill-list">
        {strengths?.map((item, index) => (
          <div className="skill-chip success" key={index}>
            <Award size={18} />
            {item}
          </div>
        ))}
      </div>

    </div>
  );
}

export default StrengthCard;