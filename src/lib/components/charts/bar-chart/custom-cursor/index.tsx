import React, { FC } from 'react';

import { Theme, useTheme } from '../../../../theme';

const CustomCursor: FC = ({ x, y, height }: any) => {
  const { colors } = useTheme() as Theme;

  return (
    <g>
      <line
        x1={x + 7}
        y1={y}
        x2={x + 7}
        y2={height}
        stroke={colors['primary']}
        strokeWidth={0.5}
        strokeDasharray="3 3"
      />
    </g>
  );
};

export default CustomCursor;
