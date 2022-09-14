import React from 'react';

import { CARD_RANKINGS_CARDS, CARD_RANKINGS_TEXT } from '../../assets/constants/rankings';
import RankingCard from './ranking-card/ranking-card';
import Title from '../../component/title/title';
import './styled';

export const Rankings = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <Title heading="Hand rankings"/>
      <RankingCard
        card1={CARD_RANKINGS_CARDS[0]}
        card2={CARD_RANKINGS_CARDS[1]}
        card3={CARD_RANKINGS_CARDS[2]}
        card4={CARD_RANKINGS_CARDS[3]}
        card5={CARD_RANKINGS_CARDS[4]}
        description={CARD_RANKINGS_TEXT[0].description}
        heading={CARD_RANKINGS_TEXT[0].heading}
      />
    </div>
  )
}

export default Rankings;