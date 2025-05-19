import styles from './Timer.module.scss'
import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import FormattedTime from '../FormattedTime/FormattedTime';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    if (!timer) {
      const newTimer = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1);
      setTimer(newTimer);
    }
  };

  const stop = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  };

  const reset = () => {
    setTime(0);
    stop();
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  return (
    <div className={styles.timerWrapper}>
      <FormattedTime time={time} />
      <div className={styles.buttonGroup}>
        <Button onClick={start}>Start</Button>
        <Button onClick={stop}>Stop</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </div>
  );
};

export default Timer