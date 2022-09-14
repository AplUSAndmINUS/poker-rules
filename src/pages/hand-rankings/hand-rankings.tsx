import React from 'react';

import { CARD_RANKINGS_CARDS, CARD_RANKINGS_TEXT } from '../../assets/constants/rankings';
import RankingCard from './ranking-card/ranking-card';
import Title from '../../component/title/title';
import './styled';

export const Rankings = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <Title heading="Hand rankings"/>
      <RankingCard />
    </div>
  )
}

export default Rankings;