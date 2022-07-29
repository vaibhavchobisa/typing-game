import './App.css';
import { useRef, useState } from 'react';

import AlphabetBox from './components/alphabet-box/alphabet-box.component';
import Timer from './components/timer/timer.component';

const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
const length = alphabetString.length;
let arr = [];

const generateRandoAlphabets = () => {
  for (let j = 0; j < 20; j++) {
    let x = alphabetString[Math.floor(Math.random() * length)];
    arr.push(x);
  }
};
generateRandoAlphabets();

const App = () => {

  const [i, setI] = useState(0);
  const [isFirstAlphaPressed, setIsFirstAlphaPressed] = useState(false);
  const [time, setTime] = useState(0);
  // const [bestTime, setBestTime] = useState(0);

  const displayText = useRef('');
  const bestTime = useRef(0);

  const keypressHandler = (event) => {
    console.log(event.key);
    if (event.key === arr[i]) {
      if (!isFirstAlphaPressed) setIsFirstAlphaPressed(true);
      setI((i) => i + 1);
    }
    else if (isFirstAlphaPressed && event.key !== arr[i]) {
      setTime((time) => time + 500)
    }
  }

  const onClickHandler = (event) => {
    setI(0);
    setIsFirstAlphaPressed(false);
    setTime(0);
    generateRandoAlphabets();
  }

  if (i === 20) {
    if (bestTime.current === 0) {
      displayText.current = 'Success!'
      // setBestTime(time);
      bestTime.current = time;
    }
    else if (bestTime.current > time) {
      displayText.current = 'Success!';
      // setBestTime(time);
      bestTime.current = time;
    }
    else if (bestTime.current < time) {
      displayText.current = 'Failure!';
    }
  }

  return (
    <div onKeyPress={keypressHandler} tabIndex={-1} className="App">
      <h1>Type the Alphabet</h1>
      <p>Typing game to see how fast you type. Timer starts when you do :)</p>
      <p className='second-instruction'>Make sure you click on the screen before you start typing ;)</p>
      <AlphabetBox
        i={i}
        arr={arr}
        bestTime={bestTime.current}
        displayText={displayText.current}
      />

      <div className='footer'>
        <Timer
          time={time}
          setTime={setTime}
          isFirstAlphaPressed={isFirstAlphaPressed}
          i={i}
        />

        {
          bestTime.current > 0
          &&
          <span className='best-time'>
            my best time: {bestTime.current / 1000}s!
          </span>
        }

        {
          i === 20
          &&
          <button onClick={onClickHandler}> Play Again!</button>
        }

      </div>
    </div>
  );
}

export default App;