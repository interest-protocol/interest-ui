import React, { FC } from 'react';

import { Theme, useTheme } from '../../../../theme';

interface CustomizedLabelProps {
  label?: string;
}

const CustomizedLabel: FC<CustomizedLabelProps> = ({ label }) => {
  const { dark } = useTheme() as Theme;

  return (
    <g>
      <text
        dy="50%"
        dx="50%"
        textAnchor="middle"
        fill={dark ? 'white' : 'black'}
        fontSize={18}
      >
        {label}
      </text>
    </g>
  );
};

export default CustomizedLabel;
