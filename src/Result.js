const Result = ({ symbols, sec, errors, show, hideModal }) => {
  let wpm;

  if (symbols !== 0 && sec !== 0) {
    wpm = symbols / 5 / (sec / 60);
    wpm = Math.round(wpm);
  }

  return (
    <div
      className="animate__animated animate__fadeIn"
      id={show ? "display-block" : "display-none"}
    >
      <div className="modal-outer">
        <div className="modal-main">
          <button id="cross" onClick={hideModal}>
            <i className="fas fa-times"></i>
          </button>
          <span>
            <strong>Words per minute</strong> = {wpm}
          </span>
          <span>
            <strong>Errors</strong> = {errors ? errors : "No errors!"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Result;
