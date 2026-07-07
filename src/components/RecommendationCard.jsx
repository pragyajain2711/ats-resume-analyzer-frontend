import { BadgeCheck } from "lucide-react";

function RecommendationCard({ recommendation }) {
  return (
    <div className="recommendation-card">

      <BadgeCheck size={45} />

      <div>

        <h2>Overall Recommendation</h2>

        <p>{recommendation}</p>

      </div>

    </div>
  );
}

export default RecommendationCard;