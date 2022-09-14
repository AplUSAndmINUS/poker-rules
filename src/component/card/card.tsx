import React from 'react';

import Club from '../../assets/suits/club';
import Diamond from '../../assets/suits/diamond';
import Heart from '../../assets/suits/heart';
import Spade from '../../assets/suits/spade';
import { Heading, StyledCard } from './styled';

export interface PokerCardProps {
  color?: string;
  isOpaque?: boolean;
  suit: string;
  value: number | string;
}

export const PokerCard = ({
  color = 'black',
  isOpaque = true,
  suit = 'club',
  value = 10 }: PokerCardProps) => {
  const getSuit = (suit: string) => {
    switch (suit) {
      case 'club':
        return <Club size={24} />;
      case 'diamond':
        return <Diamond size={24} />;
      case 'heart':
        return <Heart size={24} />;
      case 'spade':
        return <Spade size={24} />;
      default:
        return <Club size={24} />;
    }
  }
  
  return (
    <StyledCard isOpaque={isOpaque}>
      <Heading className="cardStyle" color={color}>{value}</Heading>
      {getSuit(suit)}
    </StyledCard>)
};

export default PokerCard;