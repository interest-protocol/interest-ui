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
import { SEMANTIC_COLORS } from '../charts.contants';
import CustomTooltip from '../tooltip';
import { CircleChartProps } from './circle-chart.types';
import CustomizedLabel from './customized-label';

const CircleChart: FC<CircleChartProps> = ({ data, label, height, width }) => {
  const { dark } = useTheme() as Theme;

  return (
    <ResponsiveContainer width={width || '100%'} height={height || 200}>
      <PieChart>
        <Pie
          data={data}
          cy={85}
          innerRadius={60}
          outerRadius={75}
          fill="#8884d8"
          dataKey="amount"
          nameKey="date"
          stroke=""
          onClick={undefined}
          legendType="circle"
        >
          {data.map((_entry: unknown, index: number) => (
            <Cell
              key={`cell-${index}`}
              fill={
                SEMANTIC_COLORS[index % SEMANTIC_COLORS.length][
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
              color="#6B7280"
              variant="body"
              size="small"
              fontSize={['xs', 's', 's', 's']}
              marginLeft="0.25rem"
            >
              {value}
            </Typography>
          )}
          wrapperStyle={{ top: '170px', bottom: 'unset' }}
        />
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CircleChart;
