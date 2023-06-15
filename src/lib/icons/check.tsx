import React, { FC } from 'react';

import { SVGProps } from './icons.types';

const Check: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 13 10"
    fill="none"
    {...props}
  >
    <path
      d="M4.5001 7.77999L1.7201 4.99999L0.773438 5.93999L4.5001 9.66665L12.5001 1.66665L11.5601 0.726654L4.5001 7.77999Z"
      fill="currentColor"
    />
  </svg>
);

export default Check;
