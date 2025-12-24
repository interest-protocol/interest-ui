import React, { FC } from 'react';
import { SVGProps } from './icons.types';

const ArrowRight: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 14 14"
    fill="none"
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M11.118 7.61796C11.4598 7.27617 11.4598 6.72109 11.118 6.37929L5.86797 1.12929C5.52618 0.787493 4.9711 0.787493 4.6293 1.12929C4.28751 1.47109 4.28751 2.02617 4.6293 2.36796L9.26133 6.99999L4.63204 11.632C4.29024 11.9738 4.29024 12.5289 4.63204 12.8707C4.97383 13.2125 5.52891 13.2125 5.87071 12.8707L11.1207 7.6207L11.118 7.61796Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowRight;
