import styled from 'styled-components';
import { Card } from 'react-bootstrap';

import '../../styles/main.scss';

import { PokerCardProps } from './card';

export const StyledCard = styled(Card)`
  border: 1px solid rgba(0,0,0,0.6);
  width: 45px;
  height: 70px;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.5);
  display: flex;
  f;ex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;

export const CardValue = styled.h3<PokerCardProps>`
  text-color: ${(props) => props.color
    ? props.color
    : '#000000'};
`