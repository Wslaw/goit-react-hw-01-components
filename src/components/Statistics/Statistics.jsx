import React, { useEffect, useState } from 'react';
import styles from './Statistics.module.css';
import getRandomHexColor from '../../helpers'
import getRandomLightHexColorWhite from '../../helpers';
const Statistics = ({ title, stats }) => {
  const [backgroundColor, setBackgroundColor] = useState(getRandomHexColor);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundColor(getRandomHexColor());
    }, 200);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.statistics}>
      {title && (
        <h2 className={styles.title} style={{ backgroundColor }}>
          {title}
        </h2>
      )}

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={styles.item}
            style={{ backgroundColor: getRandomLightHexColorWhite() }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistics;
