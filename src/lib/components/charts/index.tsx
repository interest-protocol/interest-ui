import React, { FC } from 'react';

import { Box } from '../../elements';
import AreaChart from './area-chart';
import BarChart from './bar-chart';
import { ChartsProps } from './charts.types';
import { isPieChart } from './charts.utils';
import LineChart from './line-chart';
import PieChart from './pie-chart';

const CommonChart = {
  area: AreaChart,
  bar: BarChart,
  line: LineChart,
};

export const Chart: FC<ChartsProps> = (props) => {
  if (isPieChart(props))
    return (
      <Box aria-label="pie-chart-holder">
        <PieChart {...props} />
      </Box>
    );

  const { variant } = props;

  const Chart = CommonChart[variant];

  if (!Chart) return null;

  return (
    <Box aria-label="chart-holder">
      <Chart {...props} />
    </Box>
  );
};
