import { useEffect, useState } from "react";

const Pretext = ({ text, userInput }) => {
  const para = text.split("");

  return (
    <div className="border rounded p-3 my-5">
      {para.map((p, i) => {
        let color;
        if (i < userInput.length) {
          color = p === userInput[i] ? "#dfffa0" : "#fcbea4";
        }
        return (
          <span key={i} style={{ backgroundColor: color }}>
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Pretext;
