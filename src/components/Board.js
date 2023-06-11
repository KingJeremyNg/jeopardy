import Card from "./Card";
import questions from "../questions.json";

const Board = () => {
    return (
        <div className="columns">
            {questions.map((element) => {
                return (
                    <div className={`column`}>
                        <Card label={element.label} />
                        {element.clues.map((clue) => {
                            return (
                                <div>
                                    <Card
                                        value={clue.value}
                                        question={clue.question}
                                        answer={clue.answer}
                                        label={clue.value}
                                        imgLink={clue.link}
                                    />
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Board;
