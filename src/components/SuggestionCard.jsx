import { Lightbulb } from "lucide-react";

function SuggestionCard({ suggestions }) {
  return (
    <div className="suggestion-card">

      <h2 className="card-title">
        Suggestions
      </h2>

      {suggestions.map((item, index) => (

        <div className="suggestion-item" key={index}>

          <Lightbulb size={20} />

          <p>{item}</p>

        </div>

      ))}

    </div>
  );
}

export default SuggestionCard;