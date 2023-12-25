// import React from 'react';
// import styles from './Profile.module.css';
// // import getRandomHexColorWhite from '../../helpers';


// const Profile = ({ username, tag, location, avatar, stats }) => (
//   <div className={styles.profile}>
//     <div className={styles.description}>
//       <img src={avatar} alt="User avatar" className={styles.avatar} />
//       <p className={styles.name}>{username}</p>
//       <p className={styles.tag}>@{tag}</p>
//       <p className={styles.location}>{location}</p>
//     </div>

//     <ul className={styles.stats}>
//       {Object.entries(stats).map(([label, quantity]) => (
//         <li
//           key={label}
//           className={styles.item}
//           // style={{ backgroundColor: getRandomHexColorWhite() }}
//         >
//           <span className={styles.label}>
//             {label.charAt(0).toUpperCase() + label.slice(1)}
//           </span>
//           <span className={styles.quantity}>{quantity}</span>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// export default Profile;

// ***********************************************************
import React from 'react';
import styles from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {

  // Преобразование объекта stats в массив пар [ключ, значение]
  const statsArray = [];
  for (const key in stats) {
    if (stats.hasOwnProperty(key)) {
      statsArray.push([key, stats[key]]);
    }
  }

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        {statsArray.map(([label, quantity]) => (
          <li key={label} className={styles.item}>
            <span className={styles.label}>
              {label.charAt(0).toUpperCase() + label.slice(1)}
            </span>
            <span className={styles.quantity}>{quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;