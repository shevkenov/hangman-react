import React, { useState } from "react";

const CreateWord = ({ setSelectedWord, showInput, setShowInput }) => {
  const [input, setInput] = useState("");
  

  const createWord = () => {
    setSelectedWord(input);
    setShowInput(false);
    setInput('');
  };

  const inputSize = ((input.length + 1) * 8) + "px" 

  return (
    <div
      className="create-word"
      style={{
        display: showInput ? "flex" : "none",
      }}
    >
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        style={{ minWidth: "300px", borderRadius: "3px", width: inputSize, padding: "0px 7px"  }}
      />
      <button onClick={createWord}>Create</button>
    </div>
  );
};

export default CreateWord;
