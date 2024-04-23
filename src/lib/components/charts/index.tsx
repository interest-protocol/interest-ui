import React, { FC } from 'react';

import { Box } from '../../elements';
import BarChart from './bar-chart';
import { ChartsProps } from './charts.types';
import { isPieChart } from './charts.utils';
import CircleChart from './circle-chart';
import LinearChart from './linear-chart';
import StepsChart from './steps-chart';

const CommonChart = {
  area: LinearChart,
  bar: BarChart,
  steps: StepsChart,
};

export const Chart: FC<ChartsProps> = (props) => {
  if (isPieChart(props))
    return (
      <Box data-testid="pieChart">
        <CircleChart {...props} />
      </Box>
    );

  const { variant } = props;

  const Chart = CommonChart[variant];

  if (!Chart) return null;

  return (
    <Box data-testid="chart">
      <Chart {...props} />;
    </Box>
  );
};
