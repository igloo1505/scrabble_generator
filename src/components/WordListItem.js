import React from "react";

const WordListItem = (props) => {
  const { word, setWords, Words } = props;
  const handleDelete = () => {
    setWords(Words.filter((w) => w !== word));
  };
  return (
    <div className="chip wordTag">
      {word}
      <span className="closeIcon material-icons" onClick={handleDelete}>
        close
      </span>
    </div>
  );
};

export default WordListItem;
