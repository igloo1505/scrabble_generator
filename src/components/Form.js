import React, { useState } from "react";
import WordListItem from "./WordListItem";

const Form = () => {
  const [Words, setWords] = useState([]);
  const [individualWord, setIndividualWord] = useState("");
  const handleAddWord = () => {
    if (individualWord !== "") {
      setWords([...Words, individualWord]);
      setIndividualWord("");
    }
  };

  const handleChanged = (e) => {
    if (e.key === "Enter") {
      return handleAddWord();
    }
  };

  return (
    <div className="row">
      <div className="wordsContainer">
        {Words.length !== 0 &&
          Words.map((word) => (
            <WordListItem
              word={word}
              key={word}
              Words={Words}
              setWords={setWords}
            />
          ))}
      </div>
      <div className="row">
        <div className="col s12">
          <div className="input-field inline">
            <input
              id="newWord"
              type="text"
              value={individualWord}
              onChange={(e) => setIndividualWord(e.target.value)}
              onKeyDown={(e) => handleChanged(e)}
            />
            <label htmlFor="newWord">
              {Words.length === 0
                ? "Enter a word to begin"
                : "Enter Another Word"}
            </label>
          </div>
          <span className="btn-floating add-word-btn" onClick={handleAddWord}>
            <i className="material-icons">add</i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
