import React from 'react';
import { Button } from 'react-bootstrap';

import SubHeading from '../../component/subheading/subheading';
import Title from '../../component/title/title';
import './styles.scss';

export const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <Title heading='Welcome!' />
      <SubHeading
        isCentered={true}
        text={`Tap on a button to head to that specific page, which will help you understand poker's rules and hand rankings`} />
      <div className="d-flex flex-column align-items-space-between justify-content-center">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
        </div>
    </div>)
}

export default Home;