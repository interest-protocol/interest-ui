import React, { FC } from 'react';

import { Box } from '../../elements';
import AreaChart from './area-chart';
import BarChart from './bar-chart';
import { ChartsProps } from './charts.types';
import LineChart from './line-chart';
import PieChart from './pie-chart';

export const Chart: FC<ChartsProps> = (props) => {
  const { variant } = props;

  switch (variant) {
    case 'pie':
      return (
        <Box aria-label="pie-chart-holder">
          <PieChart {...props} />
        </Box>
      );
    case 'area':
      return (
        <Box aria-label="area-chart-holder">
          <AreaChart {...props} />
        </Box>
      );
    case 'line':
      return (
        <Box aria-label="line-chart-holder">
          <LineChart {...props} />
        </Box>
      );
    case 'bar':
      return (
        <Box aria-label="bar-chart-holder">
          <BarChart {...props} />
        </Box>
      );
    default:
      return null;
  }
};
