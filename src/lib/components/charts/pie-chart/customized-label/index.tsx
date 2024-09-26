import React, { FC } from 'react';

import { Theme, useTheme } from '../../../../theme';
import { CustomizedLabelProps } from './customized-label.types';

const CustomizedLabel: FC<CustomizedLabelProps> = ({ label }) => {
  const { colors } = useTheme() as Theme;

  return (
    <g>
      <text
        dy="50%"
        dx="50%"
        fontSize={18}
        textAnchor="middle"
        fill={colors['onSurface']}
      >
        {label}
      </text>
    </g>
  );
};

export default CustomizedLabel;
