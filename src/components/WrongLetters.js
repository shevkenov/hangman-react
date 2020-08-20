import React from 'react'

const WrongLetters = ({wrongLetters}) => {
    const result = wrongLetters
      .map((l, i) => <span key={i}>{l}</span>)
      .reduce((acc, cur) => acc === null ? cur : [acc, ', ', cur], null);
    return (
      <div className="wrong-letters-container">
        <div>
          {wrongLetters.length > 0 && <p>Wrong letters:</p>}
          {result}
        </div>
      </div>
    );
}

export default WrongLetters
