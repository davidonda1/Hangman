import './App.scss';
import HangmanDrawing from "../HangmanDrawing/HangmanDrawing";
import HangmanWord from "../HangmanWord/HangmanWord";
import Keyboard from "../Keyboard/Keyboard";
import {useState} from "react";
import wordList from '../../constants/wordList.json';

function App() {
    const [word, setWord] = useState(() => {
        return wordList[Math.floor(Math.random() * wordList.length)];
    })
    console.log(word);
    const [userWord, setUserWord] = useState([]);
    const [result, setResult] = useState('Now Play!');
    const [disabledKey, setDisabledKey] = useState([]);
    const [wrong, setWrong] = useState(0);

    const keyOnClick = (key) => {
        setDisabledKey(prevState => {
            return [...prevState, key];
        })
        console.log('key')
        if (word.includes(key)) {
            setUserWord(prevState => {
                if ([...prevState, key].join('') === word) {
                    setResult('You win!')
                }
                return [...prevState, key];

            })
        } else {
            setWrong(prevState => prevState + 1);
        }
    }
    const headerClassname = () => {
        if (result === 'You Lose!') {
            return 'header lose';
        } else if (result === 'Now Play!') {
            return 'header';
        } else if (result === 'You win!') {
            return 'header win';
        }
    }

    const newGame = () => {
        setWord(() => {
            return wordList[Math.floor(Math.random() * wordList.length)];
        });
        setUserWord([]);
        setResult('Now Play!');
        setDisabledKey([]);
        setWrong(0);

    }

    return (
        <div className="app">
            <h1 className={headerClassname()}>{result}
                <button onClick={newGame}>Try again!</button>
            </h1>
            <HangmanDrawing wrong={wrong} setResult={setResult}/>
            <HangmanWord word={word} userWord={userWord} result={result}/>
            <Keyboard keyonclick={keyOnClick} result={result} disabledKey={disabledKey}/>
        </div>
    );
}

export default App;
