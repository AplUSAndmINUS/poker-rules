import React from 'react';
import Club from '../../assets/suits/club';
import styled from 'styled-components';

import { Heading, StyledCard } from './styled';

export interface PokerCardProps {
  color?: string;
  suit: JSX.Element;
  value: string;
}

export const PokerCard = ({ color = 'black', suit, value }: PokerCardProps) => {
  return (
    <StyledCard>
      <Heading className="cardStyle" color={color}>10</Heading>
      <Club size={24} />
    </StyledCard>)
};

export default PokerCard;