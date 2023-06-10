import { useState } from "react";

const Player = () => {
    const [score, setScore] = useState("0");
    const [name, setName] = useState("Name")
    const [displayScore, setDisplayScore] = useState(false);
    const [displayName, setDisplayName] = useState(false);

    const handleScore = (event) => { setScore(event.target.value) };
    const handleName = (event) => { setName(event.target.value) };
    const handleDisplayScore = () => { setDisplayScore(!displayScore) };
    const handleDisplayName = () => { setDisplayName(!displayName) };

    return (
        <div className="card my-5 has-background-link-dark">
            <div className="card-content">
                <div className="media-content has-text-centered">
                    {displayScore ? (<input class="input" type="text" value={score} onChange={handleScore} autoFocus></input>) : null}
                    <p className="title is-clickable has-text-white" onClick={handleDisplayScore}>${score}</p>
                    {displayName ? (<input class="input" type="text" value={name} onChange={handleName} autoFocus></input>) : null}
                    <p className="subtitle is-clickable has-text-white" onClick={handleDisplayName}>{name}</p>
                </div>
            </div>
        </div>
    )
}

export default Player;
