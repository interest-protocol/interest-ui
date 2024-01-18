import React, { FC } from 'react';

import BarChart from './bar-chart';
import { ChartsProps } from './charts.types';
import CircleChart from './circle-chart';
import LinearChart from './linear-chart';
import StepsChart from './steps-chart';

export const Chart: FC<ChartsProps> = ({ data, type, label }) => (
  <>
    {type === 'area' ? (
      <LinearChart data={data} />
    ) : type === 'bar' ? (
      <BarChart data={data} />
    ) : type === 'pie' ? (
      <CircleChart label={label} data={data} />
    ) : type === 'steps' ? (
      <StepsChart data={data} />
    ) : null}
  </>
);
