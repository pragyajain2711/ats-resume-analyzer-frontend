import { FileText } from "lucide-react";

function SummaryCard({ summary }) {

    return (

        <div className="dashboard-card">

            <h2 className="card-title">
                <FileText size={20}/>
                Professional Summary
            </h2>

            <p className="summary-text">
                {summary}
            </p>

        </div>

    );

}

export default SummaryCard;