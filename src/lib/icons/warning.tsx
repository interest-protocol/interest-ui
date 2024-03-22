import React, { FC } from 'react';

import { SVGProps } from './icons.types';

const Warning: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    style={{ maxWidth, maxHeight }}
    fill="none"
    {...props}
  >
    <path
      d="M12.9999 8.00012V14.0001H10.9999V8.00012H12.9999Z"
      fill="currentColor"
    />
    <path
      d="M10.9999 16.0001H13.0099V18.0001H10.9999V16.0001Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.115 1.53431L12.8848 1.53427L22.8848 20.5344L21.9999 22.0001H2.0009L1.11597 20.5344L11.115 1.53431ZM12 4.1472L3.65719 20.0001H20.3436L12 4.1472Z"
      fill="currentColor"
    />
  </svg>
);

export default Warning;
