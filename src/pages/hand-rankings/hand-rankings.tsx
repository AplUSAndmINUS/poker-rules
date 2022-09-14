import React from 'react';

import Title from '../../component/title/title';
import './styles.scss';
import './styled';
import RankingCard from './ranking-card/ranking-card';

export const Rankings = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <Title heading="Hand rankings"/>
      <RankingCard />
    </div>
  )
}

export default Rankings;