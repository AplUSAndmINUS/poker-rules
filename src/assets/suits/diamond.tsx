import React from 'react';
import { SuitProps } from './spade';

import '../../styles/color.scss';

export const Diamond = ({ color = '#830E0D', size }: SuitProps) => {
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
          d="M878.5,511.42c-135.36,161.2-262.32,326.43-370.7,506.41C397.54,838.54,269.94,674.54,136.84,513.02
          c132.03-162,263.06-324.11,369.63-507.98C616.19,185.61,744.05,350.6,878.5,511.42z"/>
      </g>
    </svg>
  )
}

export default Diamond;