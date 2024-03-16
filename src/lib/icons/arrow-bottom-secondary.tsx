import React, { FC } from 'react';

import { SVGProps } from './icons.types';

const ArrowBottomSecondary: FC<SVGProps> = ({
  maxWidth,
  maxHeight,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    style={{ maxWidth, maxHeight }}
    fill="none"
    {...props}
  >
    <path
      d="M12 15.3107L17.5607 9.74999L16.5 8.68933L12 13.1893L7.50001 8.68933L6.43935 9.74999L12 15.3107Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowBottomSecondary;
