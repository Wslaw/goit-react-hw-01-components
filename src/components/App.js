// components/App.js
import React from 'react';
import Profile from './Profile/Profile';
import user from '../data/user.json';

const App = () => (
  <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    {/* Другие компоненты и данные здесь */}
  </div>
);

export default App;
