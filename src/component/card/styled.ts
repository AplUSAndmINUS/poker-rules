import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const blackColor = '#000000 !important';
const redColor = '#D11613 !important';

export const Heading = styled.h3<{ color: string }>`
  color: ${props => props.color === 'red'
    ? redColor
    : blackColor};
  font-size: 27px; 
`;

export const StyledCard = styled(Card)<{ isOpaque: boolean }>`
  border: 1px solid rgba(0,0,0,0.6);
  width: 45px;
  height: 70px;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4px;
  margin-right: 4px;
  max-width: 350px;
  opacity: ${props => props.isOpaque === true 
    ? 1
    : 0.5};
  background-color: ${props => props.isOpaque === true 
    ? 'auto'
    : 'rgba(100,100,100,0.7)'};
`;