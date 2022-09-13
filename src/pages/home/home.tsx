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
      <Card color="red" value={'J'} /><Card value={'K'}/>
    </div>)
}

export default Home;