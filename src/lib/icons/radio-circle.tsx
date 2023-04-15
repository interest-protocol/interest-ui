import React, { FC } from 'react';

import { SVGProps } from './icons.types';

const RadioCircle: FC<SVGProps & { isChecked: boolean }> = ({
  maxWidth,
  maxHeight,
  isChecked,
  ...props
}) => (
  <svg style={{ maxWidth, maxHeight }} viewBox="0 0 20 20" {...props}>
    <path
      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
      fill="currentColor"
    />
    {isChecked && (
      <path
        d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
        fill="currentColor"
      />
    )}
  </svg>
);

export default RadioCircle;
