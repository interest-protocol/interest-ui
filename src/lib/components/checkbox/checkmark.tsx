import { FC } from 'react';
import React from 'react';

import { SVGProps } from '../../icons/icons.types';

export const Checkmark: FC<SVGProps & { isIndeterminate?: boolean }> = ({
  maxHeight,
  maxWidth,
  isIndeterminate,
}) => {
  return (
    <svg width={maxWidth} height={maxHeight} viewBox="0 0 16 16">
      {isIndeterminate ? (
        <path
          d="M2.66666 7.33333H13.3333V8.66667H2.66666V7.33333Z"
          fill="white"
        />
      ) : (
        <path
          d="M14.2761 4L5.99999 12.2761L1.72385 8L2.66666 7.05719L5.99999 10.3905L13.3333 3.05719L14.2761 4Z"
          fill="white"
        />
      )}
    </svg>
  );
};

export default Checkmark;
