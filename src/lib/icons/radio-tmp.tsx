import React, { FC } from 'react';

import { SVGProps } from './icons.types';

const RadioTmp: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    viewBox="0 0 20 20"
    style={{ maxWidth, maxHeight }}
    fill="none"
    {...props}
  >
    <path
      d="M10 6.10352e-05C4.48 6.10352e-05 0 4.48006 0 10.0001C0 15.5201 4.48 20.0001 10 20.0001C15.52 20.0001 20 15.5201 20 10.0001C20 4.48006 15.52 6.10352e-05 10 6.10352e-05ZM10 18.0001C5.58 18.0001 2 14.4201 2 10.0001C2 5.58006 5.58 2.00006 10 2.00006C14.42 2.00006 18 5.58006 18 10.0001C18 14.4201 14.42 18.0001 10 18.0001Z"
      fill={props.fill || 'currentColor'}
    />
    <path
      d="M10 15.0001C12.7614 15.0001 15 12.7615 15 10.0001C15 7.23864 12.7614 5.00006 10 5.00006C7.23858 5.00006 5 7.23864 5 10.0001C5 12.7615 7.23858 15.0001 10 15.0001Z"
      fill={props.fill || 'currentColor'}
    />
  </svg>
);

export default RadioTmp;
