import React, { FC } from 'react';

import { SVGProps } from './icons.types';

const Check: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 48 48"
    fill="none"
    {...props}
  >
    <rect width="48" height="48" rx="24" fill="#BAF6CF" />
    <rect
      x="2"
      y="2"
      style={{ maxWidth, maxHeight }}
      rx="22"
      stroke="currentColor"
      strokeOpacity="0.72"
      strokeWidth="4"
    />
    <path
      d="M33.4141 18.0002L20.9999 30.4144L14.5857 24.0002L15.9999 22.5859L20.9999 27.5859L31.9999 16.5859L33.4141 18.0002Z"
      fill="#16A24A"
    />
  </svg>
);

export default Check;
