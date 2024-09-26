import React, { FC } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

import { colors } from '../../../theme/dark/colors';
import { BaseChartProps } from '../charts.types';
import CustomXAxisTick from '../customized-axis-tick';
import CustomTooltip from '../tooltip';

const BarChartComponent: FC<BaseChartProps> = ({ data, height, width }) => (
  <ResponsiveContainer width={width || '100%'} height={height || 200}>
    <BarChart
      data={data}
      barCategoryGap="1%"
      margin={{
        top: 5,
        left: 20,
        right: 30,
        bottom: 5,
      }}
    >
      <CartesianGrid opacity={0.25} vertical={false} stroke="outlineVariant" />
      <XAxis
        type="category"
        dataKey="label"
        tickLine={false}
        tick={<CustomXAxisTick />}
        interval="preserveStartEnd"
      />
      <Tooltip
        contentStyle={{
          zIndex: 999,
        }}
        content={<CustomTooltip />}
        animationEasing="ease-in-out"
      />
      <Bar dataKey="value" fill={colors['primary']} />
    </BarChart>
  </ResponsiveContainer>
);

export default BarChartComponent;
