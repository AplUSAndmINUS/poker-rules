import React from 'react';

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
      <div className="d-flex flex-row justify-content-left align-items-baseline p-3">
        <PokerCard />
        <PokerCard />
        <PokerCard />
        <PokerCard />
        <PokerCard />
      </div>
      <h3 className="ps-3 mb-0">Royal Flush</h3>
      <p className="mx-3 font-weight-bold" style={{ lineHeight: '20px' }}>Ace, King, Queen, Jack and Ten all of the same suit</p>
    </div>
  ) 
};

export default RankingCard