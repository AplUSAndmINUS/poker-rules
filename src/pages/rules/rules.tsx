import React from 'react';

import SubHeading from '../../component/subheading/subheading';
import Title from '../../component/title/title';
import { HomeButton } from '../home/styled';

export const Rules = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <Title heading='Game Rules' />
      <SubHeading
        isCentered={false}
        text={`Tap on a button to understand each game's rules`} />
      <div className="d-grid gap-2"> 
        {/* homebutton needs to be set as a component */}
        <HomeButton
          href="/rules/five-card-draw"
          variant="outline-light"
          size="lg"
          className="px-5 py-3 mb-2">Five-card Draw</HomeButton>
        <HomeButton
          href="/rules/seven-card-stud"
          variant="outline-light"
          size="lg"
          disabled
          className="px-5 py-3 mb-2">Seven-card Stud (Coming Soon)</HomeButton>
        <HomeButton
          href="/rules/texas-holdem"
          variant="outline-light"
          size="lg"
          className="px-5 py-3 mb-2"
          disabled>Texas Hold-em (Coming Soon)</HomeButton>
        </div>
    </div>
  )
}

export default Rules;