import React, { FC } from 'react';

import { SVGProps } from './icons.types';

const Token: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 40 40"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_244_4576)">
      <rect width="40" height="40" fill="#DBE1FF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.0001 24.4445C22.4547 24.4445 24.4445 22.4546 24.4445 20C24.4445 17.5454 22.4547 15.5556 20.0001 15.5556C17.5455 15.5556 15.5557 17.5454 15.5557 20C15.5557 22.4546 17.5455 24.4445 20.0001 24.4445ZM26.6668 20C26.6668 23.6819 23.682 26.6667 20.0001 26.6667C16.3182 26.6667 13.3334 23.6819 13.3334 20C13.3334 16.3181 16.3182 13.3333 20.0001 13.3333C23.682 13.3333 26.6668 16.3181 26.6668 20Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_244_4576">
        <rect width="40" height="40" rx="8" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Token;
