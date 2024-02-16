import React, { FC } from 'react';
import {
  Cell,
  Label,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

import { Typography } from '../../../elements';
import { Theme, useTheme } from '../../../theme';
import CustomTooltip from '../tooltip';
import { CircleChartProps } from './circle-chart.types';
import CustomizedLabel from './customized-label';

const CircleChart: FC<CircleChartProps> = ({
  data,
  label,
  height,
  width,
  semanticColors,
}) => {
  const { dark } = useTheme() as Theme;

  return (
    <ResponsiveContainer width={width || '100%'} height={height || 200}>
      <PieChart>
        <Pie
          data={data}
          cy={85}
          innerRadius={60}
          outerRadius={75}
          dataKey="amount"
          nameKey="day"
          stroke=""
          onClick={undefined}
          legendType="circle"
        >
          {data.map((_entry: unknown, index: number) => (
            <Cell
              key={`cell-${index}`}
              fill={
                semanticColors[index % semanticColors.length][
                  dark ? 'dark' : 'light'
                ]
              }
            />
          ))}
          <Label
            content={<CustomizedLabel label={label} />}
            position="center"
          />
        </Pie>
        <Legend
          iconSize={8}
          formatter={(value) => (
            <Typography
              as="span"
              variant="body"
              size="small"
              fontSize={['xs', 's', 's', 's']}
              marginLeft="0.25rem"
            >
              {value}
            </Typography>
          )}
          wrapperStyle={{ top: '10.625rem', bottom: 'unset' }}
        />
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CircleChart;
