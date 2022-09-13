import React from 'react';
import Club from '../../assets/suits/club';

import { Heading, StyledCard } from './styled';

export interface PokerCardProps {
  color?: string;
  suit: JSX.Element;
  value: number | string;
}

export const PokerCard = ({ color = 'black', suit, value = 10 }: PokerCardProps) => {
  return (
    <StyledCard>
      <Heading className="cardStyle" color={color}>{value}</Heading>
      <Club size={24} />
    </StyledCard>)
};

export default PokerCard;