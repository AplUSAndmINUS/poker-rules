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
      <RankingCard
        card1={CARD_RANKINGS_CARDS[5]}
        card2={CARD_RANKINGS_CARDS[6]}
        card3={CARD_RANKINGS_CARDS[7]}
        card4={CARD_RANKINGS_CARDS[8]}
        card5={CARD_RANKINGS_CARDS[9]}
        description={CARD_RANKINGS_TEXT[1].description}
        heading={CARD_RANKINGS_TEXT[1].heading}
      />
      <RankingCard
        card1={CARD_RANKINGS_CARDS[10]}
        card2={CARD_RANKINGS_CARDS[11]}
        card3={CARD_RANKINGS_CARDS[12]}
        card4={CARD_RANKINGS_CARDS[13]}
        card5={CARD_RANKINGS_CARDS[14]}
        description={CARD_RANKINGS_TEXT[2].description}
        heading={CARD_RANKINGS_TEXT[2].heading}
      />
      <RankingCard
        card1={CARD_RANKINGS_CARDS[15]}
        card2={CARD_RANKINGS_CARDS[16]}
        card3={CARD_RANKINGS_CARDS[17]}
        card4={CARD_RANKINGS_CARDS[18]}
        card5={CARD_RANKINGS_CARDS[19]}
        description={CARD_RANKINGS_TEXT[3].description}
        heading={CARD_RANKINGS_TEXT[3].heading}
      />
      <RankingCard
        card1={CARD_RANKINGS_CARDS[0]}
        card2={CARD_RANKINGS_CARDS[1]}
        card3={CARD_RANKINGS_CARDS[2]}
        card4={CARD_RANKINGS_CARDS[3]}
        card5={CARD_RANKINGS_CARDS[4]}
        description={CARD_RANKINGS_TEXT[0].description}
        heading={CARD_RANKINGS_TEXT[0].heading}
      />
      <RankingCard
        card1={CARD_RANKINGS_CARDS[5]}
        card2={CARD_RANKINGS_CARDS[6]}
        card3={CARD_RANKINGS_CARDS[7]}
        card4={CARD_RANKINGS_CARDS[8]}
        card5={CARD_RANKINGS_CARDS[9]}
        description={CARD_RANKINGS_TEXT[1].description}
        heading={CARD_RANKINGS_TEXT[1].heading}
      />
      <RankingCard
        card1={CARD_RANKINGS_CARDS[0]}
        card2={CARD_RANKINGS_CARDS[1]}
        card3={CARD_RANKINGS_CARDS[2]}
        card4={CARD_RANKINGS_CARDS[3]}
        card5={CARD_RANKINGS_CARDS[4]}
        description={CARD_RANKINGS_TEXT[0].description}
        heading={CARD_RANKINGS_TEXT[0].heading}
      />
      <RankingCard
        card1={CARD_RANKINGS_CARDS[5]}
        card2={CARD_RANKINGS_CARDS[6]}
        card3={CARD_RANKINGS_CARDS[7]}
        card4={CARD_RANKINGS_CARDS[8]}
        card5={CARD_RANKINGS_CARDS[9]}
        description={CARD_RANKINGS_TEXT[1].description}
        heading={CARD_RANKINGS_TEXT[1].heading}
      />
      <RankingCard
        card1={CARD_RANKINGS_CARDS[0]}
        card2={CARD_RANKINGS_CARDS[1]}
        card3={CARD_RANKINGS_CARDS[2]}
        card4={CARD_RANKINGS_CARDS[3]}
        card5={CARD_RANKINGS_CARDS[4]}
        description={CARD_RANKINGS_TEXT[0].description}
        heading={CARD_RANKINGS_TEXT[0].heading}
      />
      <RankingCard
        card1={CARD_RANKINGS_CARDS[5]}
        card2={CARD_RANKINGS_CARDS[6]}
        card3={CARD_RANKINGS_CARDS[7]}
        card4={CARD_RANKINGS_CARDS[8]}
        card5={CARD_RANKINGS_CARDS[9]}
        description={CARD_RANKINGS_TEXT[1].description}
        heading={CARD_RANKINGS_TEXT[1].heading}
      />
      <RankingCard
        card1={CARD_RANKINGS_CARDS[0]}
        card2={CARD_RANKINGS_CARDS[1]}
        card3={CARD_RANKINGS_CARDS[2]}
        card4={CARD_RANKINGS_CARDS[3]}
        card5={CARD_RANKINGS_CARDS[4]}
        description={CARD_RANKINGS_TEXT[0].description}
        heading={CARD_RANKINGS_TEXT[0].heading}
      />
      <RankingCard
        card1={CARD_RANKINGS_CARDS[5]}
        card2={CARD_RANKINGS_CARDS[6]}
        card3={CARD_RANKINGS_CARDS[7]}
        card4={CARD_RANKINGS_CARDS[8]}
        card5={CARD_RANKINGS_CARDS[9]}
        description={CARD_RANKINGS_TEXT[1].description}
        heading={CARD_RANKINGS_TEXT[1].heading}
      />
    </div>
  )
}

export default Rankings;