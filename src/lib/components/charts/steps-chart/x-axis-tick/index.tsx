import React, { FC } from 'react';

import { Theme, useTheme } from '../../../../theme';
import { CustomXAxisTickProps } from './x-axis-tick.types';

const CustomXAxisTick: FC<CustomXAxisTickProps> = (props) => {
  const { dark } = useTheme() as Theme;
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        fontSize="0.75rem"
        fill={dark ? 'white' : 'black'}
      >
        <tspan
          fill={dark ? 'white' : 'black'}
          style={{
            fontFamily: 'Proto',
          }}
        >
          {payload?.value}
        </tspan>
      </text>
    </g>
  );
};

export default CustomXAxisTick;
