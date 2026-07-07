function ScoreBreakdownCard({ data }) {

    return (

        <div className="dashboard-card">

            <h2 className="card-title">
                Score Breakdown
            </h2>

            <p>Skills Match : {data.skillScore}%</p>

            <p>Experience : {data.experienceScore}%</p>

            <p>Education : {data.educationScore}%</p>

            <p>Resume Quality : {data.qualityScore}%</p>

        </div>

    );

}

export default ScoreBreakdownCard;