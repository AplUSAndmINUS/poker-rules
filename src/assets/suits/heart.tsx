import React from 'react';
import { SuitProps } from './spade';

import '../../styles/color.scss';

export const Heart = ({ color = '#D11613', size }: SuitProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={String(size)}
      height={String(size)}
      viewBox="0 0 1024 1024">
      <g>
        <path
          className="st0Red"
          fill={color}
          d="M512.35,144.28c16.9-18.75,33.47-36.91,49.78-55.3C717.24-85.83,949.9,23.03,1000.77,193.99
          c38.32,128.78,10,247.86-73.18,349.84C871.7,612.35,805.71,672.9,741.88,734.58c-72.77,70.32-143.63,141.84-195.45,229.72
          c-11.8,20-22.38,40.73-33.79,61.63c-1.77-1.14-4.18-1.81-4.87-3.28c-52.93-112.7-135.58-201.8-224.81-286.13
          c-56.88-53.75-114.14-107.46-166.71-165.3C41.82,489.35,3.59,392.12,6.58,279.68C10.53,130.91,118.95,13.79,266.89,0.8
          c64.87-5.7,118.93,19.57,165.51,61.81C459.97,87.6,484.65,115.77,512.35,144.28z"/>
      </g>
    </svg>
  )
}

export default Heart;