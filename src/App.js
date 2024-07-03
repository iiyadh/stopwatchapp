import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [is_run,setIs_run] = useState(false); 
  const [stopwatch,setStopwatch] = useState(0);
  useEffect(() => {
    let interval;
    if (is_run) {
      interval = setInterval(() => {
        setStopwatch(prevTime => prevTime + 1);
      }, 1000);
    } else if (!is_run && stopwatch !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [is_run, stopwatch]);

  const handleClick = ()=>{
    setIs_run(true);
  }
  const handleRest = ()=>{
    setIs_run(false);
    setStopwatch(0);

  }
  const handleStop = ()=>{
    setIs_run(false);
  }
  const formatTime = (t)=>{
    return t < 10 ? `0${t}` : t;
  }

  return (
    <div className="App">
      <h1>{formatTime(Math.floor(stopwatch/60/60))}:{formatTime(Math.floor(stopwatch/60)%60)}:{formatTime(stopwatch%60)}</h1>
      <div className='btns'>
      <button onClick={handleClick}>Start</button>
      <button onClick={handleRest}>Rest</button>
      <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
}

export default App;
