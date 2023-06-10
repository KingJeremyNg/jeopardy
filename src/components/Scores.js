import { useState } from "react";
import Player from "./Player";

const Scores = () => {
    const [numPlayers, setNumPlayers] = useState(5);

    const handleAdd = () => { setNumPlayers(numPlayers + 1) };
    const handleMinus = () => { setNumPlayers(numPlayers - 1) };

    return (
        <>
            <div className="columns">
                {[...Array(numPlayers)].map((e, i) => {
                    return (
                        <div className="column">
                            <Player />
                        </div>
                    )
                })}
            </div>
            <button className="button" onClick={handleAdd}>+</button>
            <button className="button" onClick={handleMinus}>-</button>
        </>
    )
}

export default Scores;
