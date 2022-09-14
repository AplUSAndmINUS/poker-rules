import React from 'react';

import Card from '../../component/card/card';
import './styles.scss';

export const Home = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'left',
    }}>
      <Card color="red" value={'10'} suit="heart" /><Card suit="spade" value={'K'}/>
    </div>)
}

export default Home;