import React, { FC } from 'react';

import { Theme, useTheme } from '../../../theme';
import { CustomXAxisTickProps } from './customized-axis-tick.types';

const CustomizedAxisTick: FC<CustomXAxisTickProps> = ({ x, y, payload }) => {
  const { colors } = useTheme() as Theme;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={20}
        fontSize="0.75rem"
        textAnchor="middle"
        style={{
          fontFamily: 'Proto',
        }}
        fill={colors['onSurface']}
      >
        {payload?.value}
      </text>
    </g>
  );
};

export default CustomizedAxisTick;
