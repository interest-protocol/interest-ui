import React, { FC } from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

import { Theme, useTheme } from '../../../theme';
import { BaseChartProps } from '../base-chart.types';
import CustomTooltip from '../tooltip';
import CustomizedAxisTick from './customized-axis-tick';

const LinearChart: FC<BaseChartProps> = ({ data, height, width }) => {
  const { colors } = useTheme() as Theme;

  return (
    <ResponsiveContainer width={width || '100%'} height={height || 200}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="6%" stopColor={colors['primary']} />
            <stop offset="7%" stopColor={colors['primary']} />
            <stop offset="85%" stopColor="rgba(180, 197, 255, 0)" />
          </linearGradient>
        </defs>
        <Tooltip
          animationDuration={600}
          content={<CustomTooltip />}
          animationEasing="ease-in-out"
          cursor={{
            strokeWidth: 0.5,
            strokeDasharray: '3 3',
            stroke: colors['outline'],
          }}
        />
        <XAxis
          tickCount={6}
          type="category"
          dataKey="date"
          tickLine={false}
          interval="preserveStartEnd"
          tick={<CustomizedAxisTick />}
          domain={['dataMin', 'dataMax']}
          angle={40}
        />
        <Area
          type="linear"
          dataKey="amount"
          fillOpacity={0.15}
          fill="url(#chartGradient)"
          stroke={colors['primary']}
          activeDot={{ stroke: 'transparent', r: 3.5 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LinearChart;
