import { FC } from 'react';
import React from 'react';

import { SVGProps } from '../../icons/icons.types';
import { Theme, useTheme } from '../../theme';

export const Checkmark: FC<SVGProps> = ({ maxHeight, maxWidth }) => {
  const { colors } = useTheme() as Theme;

  return (
    <svg width={maxWidth} height={maxHeight} viewBox="0 0 24 24">
      <path
        d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z"
        fill={colors['onPrimary']}
      />
    </svg>
  );
};

export default Checkmark;
