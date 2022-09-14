import React from 'react';

import Club from '../../assets/suits/club';
import Diamond from '../../assets/suits/diamond';
import Heart from '../../assets/suits/heart';
import Spade from '../../assets/suits/spade';

interface TitleProps {
  isCentered?: boolean,
  isSubHeading?: boolean,
  heading: string;
  noSuits?: boolean;
}

export const Title = ({
  isCentered = true,
  isSubHeading = false,
  heading = "Title",
  noSuits = false }: TitleProps) => {
  return (
    <div
      className={isCentered
        ? 'mt-4 mx-4 d-flex cardStyle justify-content-center align-items-baseline text-center'
        : 'mt-4 ms-3 d-flex cardStyle justify-content-center align-items-baseline text-left'}>
      {noSuits
        ? null
        : <>
            <Club size={24} />
            <Diamond size={24} />
          </>}
      <h1 className={isSubHeading
        ? 'mx-2 cardStyleSubheading'
        : 'mx-2 cardStyle'}>{heading}</h1>
      {noSuits
        ? null
        : <>
            <Heart size={24} />
            <Spade size={24} />
          </>}
    </div>
  )
}

export default Title;