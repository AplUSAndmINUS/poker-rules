import React from 'react';
import Card from '../../component/card/card';

import './styles.scss';

export const Home = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '7%'
    }}>
      <Card /><Card />
    </div>)
}

export default Home;