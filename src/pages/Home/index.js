import React from 'react';

import Users from 'containers/Users';
import Images from 'containers/Images';

import './styles.scss';

const Home = () => (
  <div className="page page--home">
    <Users />
    <Images />
  </div>
);

export default Home;
