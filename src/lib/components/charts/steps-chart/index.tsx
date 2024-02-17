import React, { FC } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

import { Theme, useTheme } from '../../../theme';
import { BaseChartProps } from '../charts.types';
import CustomTooltip from '../tooltip';
import CustomXAxisTick from './x-axis-tick';

const StepsChart: FC<BaseChartProps> = ({ data, height, width }) => {
  const { colors } = useTheme() as Theme;

  return (
    <ResponsiveContainer width={width || '100%'} height={height || 200}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid
          opacity={0.25}
          horizontal={false}
          stroke="outlineVariant"
        />
        <XAxis
          tickMargin={2}
          type="category"
          minTickGap={15}
          dataKey="day"
          tickLine={false}
          tick={<CustomXAxisTick />}
          interval="preserveStartEnd"
          allowDuplicatedCategory={false}
        />
        <Tooltip
          animationDuration={600}
          animationEasing="ease-in-out"
          content={<CustomTooltip />}
          contentStyle={{
            zIndex: 999,
          }}
          cursor={{
            strokeWidth: 0.5,
            strokeDasharray: '3 3',
            stroke: colors['outline'],
          }}
        />
        <Line
          dot={false}
          dataKey="amount"
          type="monotone"
          stroke={colors['primary']}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StepsChart;
