import React from 'react';

const Result = (props) => {
    return(
        <div className="container bg-secondary p-5">
            <div className="text-success"> You Scored {props.score}/5 correct</div>

            <div className="btn btn-outline-success" onClick={props.playAgain}>Retake the exam</div>
        </div>
    );
}

export default Result;