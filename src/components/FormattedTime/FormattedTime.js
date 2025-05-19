import React from 'react';
import styles from './FormattedTime.module.scss';
import Button from '../Button/Button';

const FormattedTime = ({ time }) => {
  const formatTime = milliseconds => {
    const ms = milliseconds % 1000;
    const totalSeconds = Math.floor(milliseconds / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    // Formatowanie z zerami wiodącymi
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMs = String(ms).padStart(3, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedMs}`;
  };

  return (
    <div className={styles.component}>
      {formatTime(time)}
    </div>
  );
};

export default FormattedTime;