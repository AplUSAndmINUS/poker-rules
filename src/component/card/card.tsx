import React from 'react';
import Club from '../../assets/suits/club';

import { CardValue, StyledCard } from './styled';

export interface PokerCardProps {
  color?: string;
  suit: JSX.Element;
  value: string;
}

export const PokerCard = ({ color = '#000000', suit, value }: PokerCardProps) => {
  return (
    <StyledCard>
      <CardValue className="cardStyle" color={color}>10</CardValue>
      <Club size={24} />
    </StyledCard>)
};

export default PokerCard;