import React from 'react';
import { Card } from 'react-bootstrap';

import './styles.scss';

interface CardProps {
  color?: string;
  suit: JSX.Element;
  value: string;
}

export const PokerCard = ({ color, suit, value }: CardProps) => {
  return (<h1>I am a card!</h1>)
};

export default PokerCard;