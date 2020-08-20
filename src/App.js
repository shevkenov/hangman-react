import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from './components/Word';
import Notification from "./components/Notification";
import Popup from "./components/Popup";
import CreateWord from './components/CreateWord';

function App() {
  //const allWords = ['programming', 'javascript', 'react']
  //const word = allWords[Math.floor(Math.random() * allWords.length)].toLowerCase();
  const [selectedWord, setSelectedWord] = useState('');
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [playable, setPlayable] = useState(true)
  const [show, setShow] = useState(false)
  const [showInput, setShowInput] = useState(true);

  const setShowNotification = (setter) => {
    setter(true)

    setTimeout(() => setter(false), 2000)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      const { key, keyCode } = e;
      const letter = key.toLowerCase();

      if (
        playable &&
        keyCode >= 65 &&
        keyCode <= 90 &&
        selectedWord.length > 0
      ) {
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((oldCorrectLetters) => [
              ...oldCorrectLetters,
              letter,
            ]);
          } else {
            setShowNotification(setShow);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((oldWrongLetters) => [...oldWrongLetters, letter]);
          } else {
            setShowNotification(setShow);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [correctLetters, wrongLetters, playable, selectedWord]);

  const playAgain = () => {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);

    //const random = Math.floor(Math.random() * allWords.length)
    setSelectedWord('')
    setShowInput(true)
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <CreateWord setSelectedWord={setSelectedWord} showInput={showInput} setShowInput={setShowInput}/>
      <Popup
        wrongLetters={wrongLetters}
        correctLetters={correctLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification show={show} />
    </>
  );
}

export default App;
