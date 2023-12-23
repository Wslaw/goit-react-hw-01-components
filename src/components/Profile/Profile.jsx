import React from 'react';
import styles from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={avatar} alt="User avatar" className={styles.avatar} />
      <p className={styles.name}>{username}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      {Object.entries(stats).map(([label, quantity]) => (
        <li key={label} className={styles.stats+1}>
          <span className={styles.label}>{label}</span>
          <span className={styles.quantity}>{quantity}</span>
        </li>
      ))}
    </ul>
  </div>
);



export default Profile;
