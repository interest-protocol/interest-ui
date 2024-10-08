import React, { FC, useId } from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

import { Theme, useTheme } from '../../../theme';
import { AreaChartProps } from '../charts.types';
import CustomizedAxisTick from '../customized-axis-tick';
import CustomTooltip from '../tooltip';

const AreaGraph: FC<AreaChartProps> = ({
  data,
  width,
  height,
  withDots,
  lineType,
}) => {
  const id = useId();
  const { colors } = useTheme() as Theme;

  return (
    <ResponsiveContainer width={width || '100%'} height={height || 200}>
      <AreaChart data={data}>
        <defs>
          <linearGradient
            x1="0"
            y1="0"
            x2="0"
            y2="1"
            id={`chartGradient-${id}`}
          >
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
          angle={40}
          tickCount={6}
          dataKey="label"
          type="category"
          tickLine={false}
          interval="preserveStartEnd"
          tick={<CustomizedAxisTick />}
          domain={['dataMin', 'dataMax']}
        />
        <Area
          dot={
            withDots
              ? { stroke: colors['primary'], fill: 'white', r: 5.5 }
              : false
          }
          activeDot={{ stroke: colors['primary'], fill: 'white', r: 5.5 }}
          type={lineType}
          dataKey="value"
          fillOpacity={0.9}
          stroke={colors['primary']}
          fill={`url(#chartGradient-${id})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaGraph;
