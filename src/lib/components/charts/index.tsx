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
      // eslint-disable-next-line jsx-a11y/aria-role
      <Box role="pieChart">
        <CircleChart {...props} />
      </Box>
    );

  const { variant } = props;

  const Chart = CommonChart[variant];

  if (!Chart) return null;

  return (
    // eslint-disable-next-line jsx-a11y/aria-role
    <Box role="chart">
      <Chart {...props} />
    </Box>
  );
};
