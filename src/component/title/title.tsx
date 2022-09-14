import React from 'react';

import Club from '../../assets/suits/club';
import Diamond from '../../assets/suits/diamond';
import Heart from '../../assets/suits/heart';
import Spade from '../../assets/suits/spade';

interface TitleProps {
  heading: string;
}

export const Title = ({ heading = "Title" }: TitleProps) => {
  return (
    <div
      className="mt-4 d-flex justify-content-center align-items-baseline text-titlecase"
      style={{ textTransform: 'titlecase' }}>
      <Club size={24} />
      <Diamond size={24} />
      <h1 className="mx-2">{heading}</h1>
      <Heart size={24} />
      <Spade size={24} />
    </div>
  )
}

export default Title;