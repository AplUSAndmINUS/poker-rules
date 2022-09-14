import React from 'react';

import { HomeButton } from './styled';
import SubHeading from '../../component/subheading/subheading';
import Title from '../../component/title/title';
import './styled';

export const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <Title heading='Welcome!' />
      <SubHeading
        isCentered={true}
        text={`Tap on a button to head to that specific page, which will help you understand poker's rules and hand rankings`} />
      <div className="d-grid gap-2">
        <HomeButton
          href="/rules"
          variant="outline-light"
          size="lg"
          className="px-5 py-3 mb-2">Game Rules</HomeButton>
        <HomeButton
          href="/rankings"
          variant="outline-light"
          size="lg"
          className="px-5 py-3 mb-2">Poker Hand Rankings</HomeButton>
        <HomeButton
          href="/glossary"
          variant="outline-light"
          size="lg"
          className="px-5 py-3 mb-2"
          disabled>Glossary (Coming soon)</HomeButton>
        </div>
    </div>)
}

export default Home;