import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

function ATSScoreCard({ score }) {

    let color = "#ef4444";

    if (score >= 80) {
        color = "#16a34a";
    }
    else if (score >= 60) {
        color = "#f59e0b";
    }

    return (

        <div className="dashboard-card">

            <h2 className="card-title">
                ATS Score
            </h2>

            <div
                style={{
                    width: 180,
                    height: 180,
                    margin: "20px auto"
                }}
            >

                <CircularProgressbar
                    value={score}
                    text={`${score}%`}
                    styles={buildStyles({
                        pathColor: color,
                        textColor: color,
                        trailColor: "#ddd",
                        textSize: "16px"
                    })}
                />

            </div>

        </div>

    );

}

export default ATSScoreCard;