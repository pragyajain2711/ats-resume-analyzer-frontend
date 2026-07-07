function InterviewQuestionCard({ questions }) {

    return (

        <div className="dashboard-card">

            <h2 className="card-title">
                AI Interview Questions
            </h2>

            <ol className="question-list">

                {questions?.map((question, index) => (

                    <li key={index}>
                        {question}
                    </li>

                ))}

            </ol>

        </div>

    );

}

export default InterviewQuestionCard;