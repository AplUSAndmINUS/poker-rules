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

export const StyledCard = styled(Card)`
  border: 1px solid rgba(0,0,0,0.6);
  width: 45px;
  height: 70px;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;