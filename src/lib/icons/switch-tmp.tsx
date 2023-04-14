import React, { FC } from 'react';

import { SVGProps } from './icons.types';

const SwitchTmp: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    viewBox="0 0 37 24"
    style={{ maxWidth, maxHeight }}
    fill="none"
    {...props}
  >
    <rect
      y="3.50006"
      width="34"
      height="17"
      rx="8.5"
      fill={props.fill || 'currentColor'}
    />
    <rect x="18" y="4.50006" width="15" height="15" rx="7.5" fill="#F2F0F4" />
    <rect
      x="18"
      y="4.50006"
      width="15"
      height="15"
      rx="7.5"
      fill={props.fill || 'currentColor'}
      fillOpacity="0.04"
    />
  </svg>
);

export default SwitchTmp;
