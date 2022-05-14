import { useState } from "react";
import "./App.css";
export default function App () {
  const [start, setStart] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [guess, setGuess] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [rounds, setRounds] = useState(3);
  const [disabled, setDisabled] = useState(false);
  const getNumber = (min: number, max: number): number => {
    let winningNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return winningNumber;
  };
  function generateNumber () {
    const generatedNumber = getNumber(1, 20);
    return generatedNumber;
  }

  const begin = () => {
    setAnswer(generateNumber());
    setStart(true);
  };

  const correctAnswer = answer;

  const onChange = (event: any) => {
    event.preventDefault();
    setGuess(event.target.value);
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    if (+guess === +correctAnswer) {
      setFeedback("You Win!");
      setStart(false);
    } else if (+guess > +correctAnswer && rounds > 1) {
      setFeedback("Guess is too Large");
      setRounds(rounds - 1);
    } else if (+guess < +correctAnswer && rounds > 1) {
      setFeedback("Guess is too Small");
      setRounds(rounds - 1);
    } else {
      setFeedback("Game Over");
      setRounds(rounds - 1);
      setDisabled(true);
    }
  };
  if (start) {
    return (
      <div className="container">
        <div className="content">
          <h1 className="">Make a Guess</h1>
          <p className="">Pick a whole number between 0 and 20</p>

          <form className="" onSubmit={ onSubmit }>
            <label>Enter your Guess Below</label>
            <div>
              <input
                className=""
                type="number"
                name="guess"
                value={ guess }
                onChange={ onChange }
              ></input>
              <button
                disabled={ disabled }
                className=""
                type="submit"
                value="Submit"
              >
                Submit
              </button>
            </div>
          </form>
          <div>
            <h1>{ feedback }</h1>
            <h2>
              { " " }
              You have { rounds }
              { "" } guesses left
            </h2>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="content">
          <h1 className="t">Welcome to the Number Guessing Game</h1>
          <button className="" type="button" onClick={ begin }>
            start
          </button>
        </div>
      </div>
    );
  }
}
