import React, { FC } from 'react';

import { Theme, useTheme } from '../../../../theme';

const CustomizedAxisTick: FC<any> = (props: any) => {
  const { dark } = useTheme() as Theme;

  const { x, y, payload } = props;

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
        fill={dark ? 'white' : 'black'}
      >
        {payload.value}
      </text>
    </g>
  );
};

export default CustomizedAxisTick;
