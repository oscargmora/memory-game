import { useState } from "react";

function ScoreBoard() {
    const [currentScore, setCurrentScore] = useState(0);

    return (
        <div className="score-board">
            <p>Current Score: {currentScore}</p>
        </div>
    )
}

export default ScoreBoard