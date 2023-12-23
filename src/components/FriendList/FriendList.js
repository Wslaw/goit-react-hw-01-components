import React from 'react';
import FriendListItem from './FriendListItem';
import styles from './friendList.module.css';


const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
  </ul>
);


export default FriendList;
