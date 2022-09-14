import React from 'react';

interface SubheadingProps {
  isCentered?: boolean;
  text?: string;
}

export const SubHeading = ({ isCentered = false, text = 'Subheading' }: SubheadingProps) => {
  return <p className={isCentered ? 'mx-4 text-center' : 'mx-4'}>{text}</p>
}

export default SubHeading;