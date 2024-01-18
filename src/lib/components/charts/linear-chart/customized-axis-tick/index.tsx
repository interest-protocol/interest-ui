import React, { FC } from 'react';

const CustomizedAxisTick: FC<any> = (props: any) => {
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
        fill="#1B1B1F"
      >
        {payload.value}
      </text>
    </g>
  );
};

export default CustomizedAxisTick;
