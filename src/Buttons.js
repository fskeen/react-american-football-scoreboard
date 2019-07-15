import React from "react";
import "./App.css";


const Buttons = (props) => {
    return (
    <section className="buttons">
    
        <div>

            <h3>The team that's currently ahead is...{props.setTeamName(props.lionScore > props.tigerScore ? "THE LIONS!" : props.lionScore === props.tigerScore ? "IT'S A TIE!" : "THE TIGERS!")}{props.teamName}</h3>
        </div>
        <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
            <button className="homeButtons__touchdown" onClick={() => props.setLionScore(props.lionScore + 7)
            }>Home Touchdown</button>
            <button className="homeButtons__fieldGoal" onClick={() => props.setLionScore(props.lionScore + 3)}>Home Field Goal</button>
        </div>

        <div className="awayButtons">
            <button className="awayButtons__touchdown" onClick={() => props.setTigerScore(props.tigerScore + 7)}>Away Touchdown</button>
            <button className="awayButtons__fieldGoal" onClick={() => props.setTigerScore(props.tigerScore + 3)}>Away Field Goal</button>
        </div>
        <div>
            <button onClick={() => 
            {props.setLionScore(0)
            props.setTigerScore(0)}
            }>Reset</button>
        </div>
    </section> 
    )
    
} 

export default Buttons;