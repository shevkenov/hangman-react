import React from 'react'

const Word = ({selectedWord, correctLetters}) => {
    return (
      <div className="word">
        {selectedWord.split("").map((l, i) => (
          <span className="letter" key={i}>
            {correctLetters.includes(l) ? l : ''}
          </span>
        ))}
      </div>
    );
}

export default Word
