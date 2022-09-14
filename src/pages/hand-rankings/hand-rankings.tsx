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
        card1={CARD_RANKINGS_CARDS[20]}
        card2={CARD_RANKINGS_CARDS[21]}
        card3={CARD_RANKINGS_CARDS[22]}
        card4={CARD_RANKINGS_CARDS[23]}
        card5={CARD_RANKINGS_CARDS[24]}
        description={CARD_RANKINGS_TEXT[4].description}
        heading={CARD_RANKINGS_TEXT[4].heading}
      />
      <RankingCard
        card1={CARD_RANKINGS_CARDS[25]}
        card2={CARD_RANKINGS_CARDS[26]}
        card3={CARD_RANKINGS_CARDS[27]}
        card4={CARD_RANKINGS_CARDS[28]}
        card5={CARD_RANKINGS_CARDS[29]}
        description={CARD_RANKINGS_TEXT[5].description}
        heading={CARD_RANKINGS_TEXT[5].heading}
      />
      <RankingCard
        card1={CARD_RANKINGS_CARDS[30]}
        card2={CARD_RANKINGS_CARDS[31]}
        card3={CARD_RANKINGS_CARDS[32]}
        card4={CARD_RANKINGS_CARDS[33]}
        card5={CARD_RANKINGS_CARDS[34]}
        description={CARD_RANKINGS_TEXT[6].description}
        heading={CARD_RANKINGS_TEXT[6].heading}
      />
      <RankingCard
        card1={CARD_RANKINGS_CARDS[35]}
        card2={CARD_RANKINGS_CARDS[36]}
        card3={CARD_RANKINGS_CARDS[37]}
        card4={CARD_RANKINGS_CARDS[38]}
        card5={CARD_RANKINGS_CARDS[39]}
        description={CARD_RANKINGS_TEXT[7].description}
        heading={CARD_RANKINGS_TEXT[7].heading}
      />
      <RankingCard
        card1={CARD_RANKINGS_CARDS[40]}
        card2={CARD_RANKINGS_CARDS[41]}
        card3={CARD_RANKINGS_CARDS[42]}
        card4={CARD_RANKINGS_CARDS[43]}
        card5={CARD_RANKINGS_CARDS[44]}
        description={CARD_RANKINGS_TEXT[8].description}
        heading={CARD_RANKINGS_TEXT[8].heading}
      />
      <RankingCard
        card1={CARD_RANKINGS_CARDS[45]}
        card2={CARD_RANKINGS_CARDS[46]}
        card3={CARD_RANKINGS_CARDS[47]}
        card4={CARD_RANKINGS_CARDS[48]}
        card5={CARD_RANKINGS_CARDS[49]}
        description={CARD_RANKINGS_TEXT[9].description}
        heading={CARD_RANKINGS_TEXT[9].heading}
      />
    </div>
  )
}

export default Rankings;