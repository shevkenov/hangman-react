import React, { useEffect } from 'react'

const Popup = ({wrongLetters, correctLetters, selectedWord, setPlayable, playAgain}) => {
    let finalMessage = '';
    let finalMessageRevealWord = '';
    let playable = true 

    const checkStatus = () => {
        let status = 'win';
        
        if(selectedWord.length > 0){
            selectedWord.split("").forEach((l) => {
              if (!correctLetters.includes(l)) {
                status = "";
              }
            });

            if (wrongLetters.length === 6) status = "lose";
            return status;
        }
    };

    if(checkStatus() === 'win'){
        finalMessage = "Congratulations! You won! 😃";
        playable = false
    }else if(checkStatus() === 'lose'){
        finalMessage = "Unfortunately you lost. 😕";
        finalMessageRevealWord = `...the word was: ${selectedWord}`;
        playable = false;
    }

    useEffect(() => setPlayable(playable))
    
    return (
      <div className="popup-container" style={finalMessage !== '' ? {display: "flex"} : {}}>
        <div className="popup">
            <h2>{finalMessage}</h2>
            <h3>{finalMessageRevealWord}</h3>
          <button onClick={playAgain}>Play Again</button>
        </div>
      </div>
    );
}

export default Popup
