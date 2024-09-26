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
import CustomizedLabel from './customized-label';
import { PieChartProps } from './pie-chart.types';

const PieGraph: FC<PieChartProps> = ({
  data,
  label,
  width,
  height,
  semanticColors,
}) => {
  const { dark } = useTheme() as Theme;

  return (
    <ResponsiveContainer width={width || '100%'} height={height || 200}>
      <PieChart>
        <Pie
          cy={85}
          data={data}
          nameKey="label"
          dataKey="value"
          innerRadius={60}
          outerRadius={75}
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
              size="small"
              variant="body"
              marginLeft="0.25rem"
              fontSize={['xs', 's', 's', 's']}
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

export default PieGraph;
