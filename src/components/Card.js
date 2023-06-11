import { useState } from "react";

const Card = ({ value, question, answer, label, imgLink }) => {
    const [active, setActive] = useState(false);
    const [reveal, setReveal] = useState(false);

    const handleModal = () => { setActive(!active) };
    const handleReveal = () => { setReveal(!reveal) };

    if (!active && reveal) {
        return (
            <div className="card my-6 has-background-grey-dark">
                <div className="card-content">
                    <div className="media-content has-text-centered">
                        <s className="title has-text-grey-darker">${label}</s>
                    </div>
                </div>
            </div>
        )
    }

    if (value) {
        return (
            <>
                <div className="card my-6 is-clickable has-background-link-dark" onClick={handleModal}>
                    <div className="card-content">
                        <div className="media-content has-text-centered">
                            <p className="title has-text-warning">${label}</p>
                        </div>
                    </div>
                </div>
                <div class={`modal ${active ? "is-active" : ""}`}>
                    <div class="modal-background" onClick={handleModal}></div>
                    <div class="modal-content animate__animated animate__zoomIn">
                        <div className="box has-text-centered">
                            {imgLink ? (
                                <img src={imgLink} alt="clue" />
                            ) : (
                                <p className="title is-1">{question}</p>
                            )}
                            {reveal ? (
                                <p className="title is-1">{answer}</p>
                            ) : (
                                <button className="button" onClick={handleReveal}>Reveal Answer</button>
                            )}
                        </div>
                    </div>
                </div >
            </>
        )
    }

    return (
        <div className="card my-6 has-background-link-dark" style={{ height: "8rem" }}>
            <div className="card-content">
                <div className="media-content has-text-centered">
                    <p className="title has-text-white">{label}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
