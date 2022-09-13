import React from 'react';
import { Card } from 'react-bootstrap';

import './styles.scss';

interface PokerCardProps {
  color?: string;
  suit: JSX.Element;
  value: string;
}

export const PokerCard = ({ color, suit, value }: PokerCardProps) => {
  return (
    <>
      <Card />
    </>)
};

export default PokerCard;