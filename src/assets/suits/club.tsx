import React from 'react';
import { SuitProps } from './spade';

import '../../styles/color.scss';

export const Club = ({ color = '#000000', size }: SuitProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={String(size)}
      height={String(size)}
      viewBox="0 0 1024 1024">
      <g id="club">
        <g>
          <path
            className="st0Black"
            fill={color}
            d="M664.56,1025.04c-101.36,0-202.71,0-304.07,0c-1.71-0.23-3.41-0.56-5.12-0.68c-12.15-0.83-24.33-1.27-36.42-2.61
            c-3.63-0.4-8.37-2.35-10.22-5.16c-6.96-10.56-8.85-18.02-0.68-29.77c1.79-2.57,3.78-4.99,5.62-7.52
            c12.06-16.58,25.16-32.52,35.97-49.88c28.93-46.45,44.99-97.96,56.79-150.96c0.68-3.05,0.91-6.2,1.35-9.3
            c-0.46-0.24-0.92-0.48-1.37-0.72c-3.14,2.65-6.24,5.34-9.42,7.93c-10.1,8.24-19.55,17.49-30.46,24.47
            c-47.62,30.47-100.13,38.44-154.86,28.39C102.71,809.23,22.25,713.07,19.86,602.29c-0.94-43.81,9.17-84.84,30.96-122.8
            c28.29-49.3,68.7-84.92,122.28-104.65c45.6-16.79,92.17-17.71,139.17-6.14c1.69,0.42,3.42,0.64,6.29,1.17
            c-4.01-7.47-7.48-13.67-10.7-19.99c-11.58-22.7-22.2-46.14-24.91-71.48c-2.45-22.88-1.25-46.19-1.07-69.3
            c0.07-8.28,1.08-16.74,3.03-24.79c12.08-49.74,36.63-92.21,75.85-125.52C416.14,11.76,480.01-7.05,551.71,5.84
            c73.81,13.26,127.51,55.45,163.48,120.4c13.28,23.98,23.18,49.71,24.88,77.34c1.38,22.34,0.27,44.84,0.16,67.27
            c-0.02,3.11-0.42,6.26-1.02,9.32c-5.31,27.38-15.5,52.92-29.35,77.07c-2.55,4.44-4.91,8.98-7.89,14.43
            c2.55-0.36,3.76-0.34,4.83-0.72c19.12-6.74,39.02-8.4,59.07-9.26c37.92-1.62,74.14,5.1,108.24,22.06
            c97.93,48.7,150.56,159.78,126.1,265.8C976.2,753.6,890.3,827.02,784.38,832.14c-35.57,1.72-70.12-3.07-103.03-17.35
            c-20.3-8.81-38.31-21.15-55.16-35.35c-2.8-2.36-6.02-4.23-10.25-7.17c0.55,3.69,0.7,5.74,1.17,7.72
            c1.84,7.77,3.75,15.53,5.68,23.28c16.94,67.96,45.16,130.12,93,182.43c12.28,13.43,4.53,33.79-13.28,36.8
            c-1.71,0.29-3.46,0.42-5.19,0.52C686.4,1023.71,675.48,1024.37,664.56,1025.04z"/>
        </g>
      </g>
    </svg>
  )
}

export default Club;