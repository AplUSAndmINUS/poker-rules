import React from 'react';

import PokerCard from '../../../component/card/card';
import { Cards } from '../../../assets/constants/rankings';
import { Card } from './styled';
import './styled'; 

interface RankingCardProps {
  card1: Cards;
  card2: Cards;
  card3: Cards;
  card4: Cards;
  card5: Cards;
  description: string;
  heading: string;
}

// styling for tablet desktop needs to have cards stack 6x6 cols instead of 12cols
export const RankingCard = ({
  card1,
  card2,
  card3,
  card4,
  card5,
  description,
  heading }: RankingCardProps) => {
  return (
    <Card className="d-flex flex-column align-items-space-between justify-content-center mx-4 mt-3 pt-0">
      <div className="d-flex flex-row justify-content-left align-items-baseline px-3 pt-3 pb-2">
        <PokerCard
          color={card1.color}
          isOpaque={card1.isOpaque}
          suit={card1.suit}
          value={card1.value} />
        <PokerCard
          color={card2.color}
          isOpaque={card2.isOpaque}
          suit={card2.suit}
          value={card2.value} />
        <PokerCard
          color={card3.color}
          isOpaque={card3.isOpaque}
          suit={card3.suit}
          value={card3.value} />
        <PokerCard
          color={card4.color}
          isOpaque={card4.isOpaque}
          suit={card4.suit}
          value={card4.value} />
        <PokerCard
          color={card5.color}
          isOpaque={card5.isOpaque}
          suit={card5.suit}
          value={card5.value} />
      </div>
      <h3 className="cardStyle ps-3 mb-1">{heading}</h3>
      <p className="cardStyleParagraph mx-3 font-weight-bold lh-sm">{description}</p>
    </Card>
  ) 
};

export default RankingCard