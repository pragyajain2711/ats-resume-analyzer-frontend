import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ATSScoreCard from "../components/ATSScoreCard";
import ResumeInfoCard from "../components/ResumeInfoCard";
import SkillCard from "../components/SkillCard";
import MissingKeyword from "../components/MissingKeyword";
import SuggestionCard from "../components/SuggestionCard";
import RecommendationCard from "../components/RecommendationCard";
import StrengthCard from "../components/StrengthCard";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import SummaryCard from "../components/SummaryCard";

import ScoreBreakdownCard from "../components/ScoreBreakdownCard";

import { useLocation } from "react-router-dom";

function Result() {

    const { state } = useLocation();
    const data = state;

    const downloadReport = async () => {

        const input = document.getElementById("report");

        const canvas = await html2canvas(input);

        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");

        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

        heightLeft -= pageHeight;

        while (heightLeft > 0) {

            position = heightLeft - imgHeight;

            pdf.addPage();

            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

            heightLeft -= pageHeight;
        }

        pdf.save("ATS_Report.pdf");
    };

    return (
        <>
            <Navbar />

            <section
                className="result-page"
                id="report"
            >

                <div
                    style={{
                        textAlign: "right",
                        marginBottom: "20px",
                    }}
                >
                    <button
                        className="analyze-btn"
                        onClick={downloadReport}
                    >
                        Download PDF Report
                    </button>
                </div>

                <div className="result-header">

                    <h1>Resume Analysis Report</h1>

                    <p>
                        Your resume has been analyzed successfully.
                    </p>

                </div>

                <div className="dashboard-row">

                    <ATSScoreCard score={data.resumeScore} />

                    <ResumeInfoCard data={data} />

                </div>

                <div className="dashboard-row">

                    <SkillCard skills={data.matchedSkills} />

                    <MissingKeyword skills={data.missingSkills} />

                </div>

                <div className="dashboard-row">

    <ATSScoreCard score={data.resumeScore} />

    <ScoreBreakdownCard data={data} />

</div>

                <SuggestionCard suggestions={data.suggestions} />

                <StrengthCard strengths={data.strengths} />

                <RecommendationCard recommendation={data.recommendation} />

                <StrengthCard strengths={data.strengths} />

<SummaryCard
    summary={data.professionalSummary}
/>

<RecommendationCard
    recommendation={data.recommendation}
/>

<StrengthCard
    strengths={data.strengths}
/>

<RecommendationCard
    recommendation={data.recommendation}
/>

            </section>

            <Footer />

        </>
    );
}

export default Result;