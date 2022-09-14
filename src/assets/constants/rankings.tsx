export interface Cards {
  color: string;
  isOpaque: boolean;
  suit: string;
  value: number | string;
}

// need to be split into individual arrays later
export const CARD_RANKINGS_CARDS: Cards[] = [
  { // royal flush
    color: 'red',
    isOpaque: true,
    suit: 'diamond',
    value: '10',
  },
  {
    color: 'red',
    isOpaque: true,
    suit: 'diamond',
    value: 'J',
  },
  {
    color: 'red',
    isOpaque: true,
    suit: 'diamond',
    value: 'Q',
  },
  {
    color: 'red',
    isOpaque: true,
    suit: 'diamond',
    value: 'K',
  },
  {
    color: 'red',
    isOpaque: true,
    suit: 'diamond',
    value: 'A',
  }, // end royal flush
  { // straight flush
    color: 'black',
    isOpaque: true,
    suit: 'spade',
    value: '4',
  },
  {
    color: 'black',
    isOpaque: true,
    suit: 'spade',
    value: '5',
  },
  {
    color: 'black',
    isOpaque: true,
    suit: 'spade',
    value: '6',
  },
  {
    color: 'black',
    isOpaque: true,
    suit: 'spade',
    value: '7',
  },
  {
    color: 'black',
    isOpaque: true,
    suit: 'spade',
    value: '8',
  }, // end straight flush
  { // four of a kind
    color: 'red',
    isOpaque: true,
    suit: 'diamond',
    value: 'Q',
  },
  {
    color: 'black',
    isOpaque: true,
    suit: 'club',
    value: 'Q',
  },
  {
    color: 'black',
    isOpaque: true,
    suit: 'spade',
    value: 'Q',
  },
  {
    color: 'red',
    isOpaque: true,
    suit: 'heart',
    value: 'Q',
  },
  {
    color: 'red',
    isOpaque: false,
    suit: 'diamond',
    value: '7',
  }, // end four of a kind
  { // full house
    color: 'black',
    isOpaque: true,
    suit: 'spade',
    value: 'J',
  },
  {
    color: 'black',
    isOpaque: true,
    suit: 'club',
    value: 'J',
  },
  {
    color: 'red',
    isOpaque: true,
    suit: 'heart',
    value: 'J',
  },
  {
    color: 'red',
    isOpaque: true,
    suit: 'heart',
    value: '2',
  },
  {
    color: 'red',
    isOpaque: true,
    suit: 'diamond',
    value: '2',
  }, // end full house
  { // flush
    color: 'black',
    isOpaque: true,
    suit: 'club',
    value: 'K',
  },
  {
    color: 'black',
    isOpaque: true,
    suit: 'club',
    value: '3',
  },
  {
    color: 'black',
    isOpaque: true,
    suit: 'club',
    value: '9',
  },
  {
    color: 'black',
    isOpaque: true,
    suit: 'club',
    value: '7',
  },
  {
    color: 'black',
    isOpaque: true,
    suit: 'club',
    value: '10',
  }, // end flush
  { // straight
    color: 'red',
    isOpaque: true,
    suit: 'diamond',
    value: 'A',
  },
  {
    color: 'black',
    isOpaque: true,
    suit: 'club',
    value: '2',
  },
  {
    color: 'black',
    isOpaque: true,
    suit: 'spade',
    value: '3',
  },
  {
    color: 'red',
    isOpaque: true,
    suit: 'heart',
    value: '4',
  },
  {
    color: 'red',
    isOpaque: true,
    suit: 'diamond',
    value: '5',
  }, // end straight
  { // three of a kind
    color: 'black',
    isOpaque: true,
    suit: 'spade',
    value: '7',
  },
  {
    color: 'red',
    isOpaque: true,
    suit: 'diamond',
    value: '7',
  },
  {
    color: 'red',
    isOpaque: true,
    suit: 'heart',
    value: '7',
  },
  {
    color: 'red',
    isOpaque: false,
    suit: 'heart',
    value: 'A',
  },
  {
    color: 'red',
    isOpaque: false,
    suit: 'diamond',
    value: '4',
  }, // end three of a kind
  { // two pair
    color: 'red',
    isOpaque: true,
    suit: 'diamond',
    value: 'K',
  },
  {
    color: 'black',
    isOpaque: true,
    suit: 'club',
    value: 'K',
  },
  {
    color: 'black',
    isOpaque: true,
    suit: 'spade',
    value: '9',
  },
  {
    color: 'red',
    isOpaque: true,
    suit: 'heart',
    value: '9',
  },
  {
    color: 'black',
    isOpaque: false,
    suit: 'club',
    value: '5',
  }, // end two pair
  { // pair
    color: 'black',
    isOpaque: true,
    suit: 'spade',
    value: 'Q',
  },
  {
    color: 'red',
    isOpaque: true,
    suit: 'diamond',
    value: 'Q',
  },
  {
    color: 'black',
    isOpaque: false,
    suit: 'club',
    value: 'A',
  },
  {
    color: 'red',
    isOpaque: false,
    suit: 'heart',
    value: '7',
  },
  {
    color: 'black',
    isOpaque: false,
    suit: 'spade',
    value: '4',
  }, // end pair
  { // high card
    color: 'black',
    isOpaque: true,
    suit: 'club',
    value: 'K',
  },
  {
    color: 'red',
    isOpaque: false,
    suit: 'heart',
    value: '10',
  },
  {
    color: 'black',
    isOpaque: false,
    suit: 'club',
    value: '9',
  },
  {
    color: 'black',
    isOpaque: false,
    suit: 'spade',
    value: '4',
  },
  {
    color: 'red',
    isOpaque: false,
    suit: 'diamond',
    value: '2',
  } // end high card
]

export const CARD_RANKINGS_TEXT = [
  {
    heading: 'Royal Flush',
    description: 'Ace, King, Queen, Jack and Ten all of the same suit'
  },
  {
    heading: 'Straight Flush',
    description: 'Any five-card sequence in the same suit'
  },
  {
    heading: 'Four of a Kind',
    description: 'All four cards of the same rank'
  },
  {
    heading: 'Full House',
    description: 'Three of a kind combined with a pair'
  },
  {
    heading: 'Flush',
    description: 'Any five cards of the same suit, but not in sequence'
  },
  {
    heading: 'Straight',
    description: 'Five cards in sequence, but not in the same suit'
  },
  {
    heading: 'Three of a Kind',
    description: 'Three cards of the same rank'
  },
  {
    heading: 'Two Pair',
    description: 'Two separate pairs'
  },
  {
    heading: 'Pair',
    description: 'Two cards of the same rank'
  },
  {
    heading: 'High Card',
    description: 'Unrelated cards ranked by the highest single card by rank, then suit'
  },
]