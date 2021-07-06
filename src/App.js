import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Pretext from "./Pretext";
import Wpm from "./Wpm";
import Phrase from "./Phrase";
import Navbar from "./Navbar";
import Errors from "./Errors";
import Result from "./Result";

const App = () => {
  const initState = {
    text: "Typing Test",
    userInput: "",
    symbols: 0,
    sec: 0,
    started: false,
    finished: false,
    errors: 0,
  };

  const [text, setText] = useState(Phrase());
  const [sec, setSec] = useState(0);
  const [symbols, setSymbols] = useState(0);
  const [errors, setErrors] = useState(0);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [show, setShow] = useState(true);

  const [counter, setCounter] = useState(60);

  const onReset = () => {
    setSec(initState.sec);
    setSymbols(initState.symbols);
    setUserInput(initState.userInput);
    setStarted(initState.started);
    setFinished(initState.finished);
    setErrors(initState.errors);
    setText(Phrase());
    setCounter(60);
  };

  const countCorrectSymbols = (input) => {
    const para = text.replace(" ", "");
    return input
      .replace(" ", "")
      .split("")
      .filter((s, i) => s === para[i]).length;
  };

  const countErrors = (input) => {
    const para = text.replace(" ", "");
    return input
      .replace(" ", "")
      .split("")
      .filter((s, i) => s !== para[i]).length;
  };

  const hideModal = () => {
    setShow(false);
  };

  useEffect(() => {
    let interval;
    if (started) {
      interval = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
    } else if (!started && counter !== 0) {
      clearInterval(interval);
    }
    if (finished) {
      clearInterval(interval);
    }
    if (counter === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [started, counter]);

  useEffect(() => {
    let interval;
    if (started) {
      interval = setInterval(() => {
        setSec((sec) => sec + 1);
      }, 1000);
    } else if (!started && sec !== 0) {
      clearInterval(interval);
    }
    if (finished) {
      clearInterval(interval);
    }
    if (sec === 60) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [started, sec]);

  return (
    <div>
      <Navbar counter={counter} />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <Pretext text={text} userInput={userInput} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <textarea
              value={userInput}
              onChange={(e) => {
                setUserInput(e.target.value);
                setSymbols(countCorrectSymbols(userInput));
                setErrors(countErrors(userInput));
                setStarted(true);
                if (e.target.value === text) {
                  setFinished(true);
                }
              }}
              readOnly={finished || counter === 0}
              placeholder="Type here to begin"
              className="form-control mb-3"
            ></textarea>
            <Wpm symbols={symbols} sec={sec} />
            <div className="text-right">
              <button onClick={onReset} className="btn btn-light">
                Restart
              </button>
            </div>
          </div>
        </div>
        <Errors errors={errors} />
        {/* <div id={finished || counter === 0 ? "display-block" : "display-none"}>
          <Result
            symbols={symbols}
            sec={sec}
            errors={errors}
            show={show}
            hideModal={hideModal}
          />
        </div>
        {/* <Result symbols={symbols} sec={sec} errors={errors} /> */}
      </div> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
