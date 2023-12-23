import React from 'react';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(friend => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
  </ul>
);


export default FriendList;
