import React from 'react';

import './styles.scss';

export interface SuitProps {
  color?: string;
  size: number | string;
}

export const Spade = ({ color, size }: SuitProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={String(size)}
      height={String(size)}
      viewBox="0 0 1024 1024">
      <g id="spade">
        <path
          className="st0Black"
          fill={color}
          d="M505.99,5.52c3.12,0,6.23,0,9.35,0c9.38,2.74,15.02,9.4,20.2,17.4c34.43,53.14,67.86,107,104.22,158.81
          c36.96,52.67,76.6,103.47,115.63,154.66c45.7,59.92,89.26,121.19,125.21,187.61c16.72,30.89,30.71,62.74,36.36,97.7
          c1.51,9.34,2.41,18.78,3.6,28.18c0,9.35,0,18.71,0,28.06c-0.31,1.68-0.68,3.35-0.9,5.04c-1.45,10.97-2.2,22.08-4.41,32.89
          c-10.48,51.19-36.63,91.76-82.14,118.75c-25.85,15.33-54.12,23.44-83.75,27.29c-22.06,2.86-44.13,3.68-66.26,0.69
          c-28.17-3.81-51.46-17.4-72.4-35.79c-1.83-1.61-3.65-3.23-6.47-5.74c0.54,2.5,0.62,3.54,0.98,4.48
          c7.58,20.03,13.63,40.82,23.14,59.89c16.26,32.64,34.61,64.24,52.21,96.2c10.68,19.39,0.58,38.95-21.42,39.44
          c-58.33,1.31-116.67,2.27-175,2.72c-35.66,0.28-71.33-0.59-106.99-1.04c-20.21-0.25-32.15-16.92-24.51-35.51
          c4.77-11.59,11.31-22.53,17.75-33.35c21.32-35.77,38.88-73.3,53.14-112.39c2.29-6.28,3.81-12.85,5.85-19.84
          c-1.11,0.41-1.31,0.43-1.42,0.53c-1.15,1.05-2.29,2.11-3.42,3.18c-25.11,23.7-54.15,38.93-89.19,40.57
          c-33.35,1.56-65.91-3.17-97.67-13.48c-47.12-15.3-83.34-43.57-105.23-88.74c-14.66-30.25-21.05-62.58-22.06-95.91
          c-1.25-41.21,8.26-80.32,25.15-117.75c19.51-43.22,44.09-83.64,71.03-122.41c30.01-43.19,62.17-84.89,93.48-127.18
          c28.42-38.39,58.64-75.57,85.02-115.31c35.2-53.02,67.56-107.93,100.84-162.21C490.9,14.8,496.6,8.25,505.99,5.52z"/>
	    </g>
    </svg>
  )
}

export default Spade;