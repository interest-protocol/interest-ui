import React, { FC } from 'react';
import { SVGProps } from './icons.types';

const CaretUpDown: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M7 10l5-5 5 5" fill="currentColor" />
    <path d="M7 14l5 5 5-5" fill="currentColor" />
  </svg>
);

export default CaretUpDown;
