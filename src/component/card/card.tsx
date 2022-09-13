import React from 'react';
import Club from '../../assets/suits/club';

import { CardValue, StyledCard } from './styled';

export interface PokerCardProps {
  color?: string;
  suit: JSX.Element;
  value: string;
}

export const PokerCard = ({ color, suit, value }: PokerCardProps) => {
  return (
    <>
      <StyledCard>
        <CardValue className="cardStyle">10</CardValue>
        <Club size={24} />
      </StyledCard>
    </>)
};

export default PokerCard;