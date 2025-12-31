import React, { FC } from 'react';
import {
  Area,
  Bar,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';
import { v4 } from 'uuid';
import { CombinedChartProps } from './combined-chart.types';
import TooltipChart from '../tooltip-charts';

const CombinedChart: FC<CombinedChartProps> = ({ charts, data, xDataKey }) => {
  const LABEL_MAP = {
    ...(charts.area?.reduce((acc, { dataKey, label }) => {
      if (label) acc[dataKey] = label;
      return acc;
    }, {} as Record<string, string>) ?? {}),
    ...(charts.bar?.reduce((acc, { dataKey, label }) => {
      if (label) acc[dataKey] = label;
      return acc;
    }, {} as Record<string, string>) ?? {}),
  };

  return (
    <div
      data-testid="combined-chart"
      style={{ width: '100%', height: '400px' }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          width={500}
          height={400}
          margin={{
            top: 20,
            left: 10,
            right: 10,
            bottom: 20,
          }}
        >
          <defs>
            <linearGradient id="ColorArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffffff8d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ffffff8d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey={xDataKey} />

          <Tooltip
            cursor={{
              opacity: 0.5,
              strokeWidth: 1,
              strokeDasharray: '1 5',
            }}
            content={(props) => (
              <TooltipChart {...(props as any)} labelMap={LABEL_MAP} />
            )}
          />

          {charts.bar?.map((barItem, index) => (
            <Bar
              key={v4()}
              barSize={6}
              fill={barItem.color}
              dataKey={barItem.dataKey}
              radius={[10, 10, 0, 0]}
              data-testid={`combined-chart-bar-${index}`}
              data-color={barItem.color}
              data-label={barItem.label || barItem.dataKey}
            />
          ))}

          {charts.area?.map((areaItem, index) => (
            <Area
              key={v4()}
              type="natural"
              fillOpacity={1}
              strokeWidth={2}
              fill="url(#ColorArea)"
              stroke={areaItem.color}
              dataKey={areaItem.dataKey}
              data-testid={`combined-chart-area-${index}`}
              data-color={areaItem.color}
              data-label={areaItem.label || areaItem.dataKey}
            />
          ))}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CombinedChart;
