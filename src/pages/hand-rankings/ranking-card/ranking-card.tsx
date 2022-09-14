import React from 'react';

import { CARD_RANKINGS_CARDS, CARD_RANKINGS_TEXT } from '../../../assets/constants/rankings';
import PokerCard from '../../../component/card/card';
import './styled'; 

interface RankingCardProps {
  card1: String[];
  card2: String[];
  card3: String[];
  card4: String[];
  card5: String[];
  description: string;
  heading: string;
}

export const RankingCard = ({
  card1,
  card2,
  card3,
  card4,
  card5,
  description,
  heading }: RankingCardProps) => {
  return (
    <div
      className="d-flex flex-column align-items-space-between justify-content-center m-4"
      style={{ border: '1px solid #FFFFFF', borderRadius: '8px', boxShadow: '4px 4px 4px rgba(0,0,0,0.6)', backgroundColor: '#35654D' }}>
      <div className="d-flex flex-row justify-content-left align-items-baseline px-3 pt-3 pb-2">
        <PokerCard
          color={CARD_RANKINGS_CARDS[0].cards[0].color}
          isOpaque={CARD_RANKINGS_CARDS[0].cards[0].isOpaque}
          suit={CARD_RANKINGS_CARDS[0].cards[0].suit}
          value={CARD_RANKINGS_CARDS[0].cards[0].value} />
        <PokerCard
          color={CARD_RANKINGS_CARDS[0].cards[1].color}
          isOpaque={CARD_RANKINGS_CARDS[0].cards[1].isOpaque}
          suit={CARD_RANKINGS_CARDS[0].cards[1].suit}
          value={CARD_RANKINGS_CARDS[0].cards[1].value} />
        <PokerCard
          color={CARD_RANKINGS_CARDS[0].cards[2].color}
          isOpaque={CARD_RANKINGS_CARDS[0].cards[2].isOpaque}
          suit={CARD_RANKINGS_CARDS[0].cards[2].suit}
          value={CARD_RANKINGS_CARDS[0].cards[2].value} />
        <PokerCard
          color={CARD_RANKINGS_CARDS[0].cards[3].color}
          isOpaque={CARD_RANKINGS_CARDS[0].cards[3].isOpaque}
          suit={CARD_RANKINGS_CARDS[0].cards[3].suit}
          value={CARD_RANKINGS_CARDS[0].cards[3].value} />
        <PokerCard
          color={CARD_RANKINGS_CARDS[0].cards[4].color}
          isOpaque={CARD_RANKINGS_CARDS[0].cards[4].isOpaque}
          suit={CARD_RANKINGS_CARDS[0].cards[4].suit}
          value={CARD_RANKINGS_CARDS[0].cards[4].value} />
      </div>
      <h3 className="ps-3 mb-0">{CARD_RANKINGS_TEXT[0].heading}</h3>
      <p className="mx-3 font-weight-bold" style={{ lineHeight: '20px' }}>{CARD_RANKINGS_TEXT[0].description}</p>
    </div>
  ) 
};

export default RankingCard