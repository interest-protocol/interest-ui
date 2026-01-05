import React, { FC } from 'react';
import { SVGProps } from './icons.types';

const List: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M2.5 5.83301H17.5"
      stroke="#B4C5FF"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      opacity="0.34"
      d="M2.5 10H17.5"
      stroke="#B4C5FF"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M2.5 14.167H17.5"
      stroke="#B4C5FF"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default List;
