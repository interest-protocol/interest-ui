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
import { LineChartProps } from '../charts.types';
import CustomXAxisTick from '../customized-axis-tick';
import CustomTooltip from '../tooltip';

const LineGraph: FC<LineChartProps> = ({
  data,
  width,
  height,
  lineType,
  withDots,
}) => {
  const { colors } = useTheme() as Theme;

  return (
    <ResponsiveContainer width={width || '100%'} height={height || 200}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          left: 20,
          right: 30,
          bottom: 5,
        }}
      >
        <CartesianGrid
          opacity={0.25}
          horizontal={false}
          stroke="outlineVariant"
        />
        <XAxis
          dataKey="label"
          tickMargin={2}
          type="category"
          minTickGap={15}
          tickLine={false}
          tick={<CustomXAxisTick />}
          interval="preserveStartEnd"
          allowDuplicatedCategory={false}
        />
        <Tooltip
          animationDuration={600}
          content={<CustomTooltip />}
          animationEasing="ease-in-out"
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
          dot={withDots}
          type={lineType}
          dataKey="value"
          stroke={colors['primary']}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
