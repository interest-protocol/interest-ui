import { TSemenaticColors } from './pie-chart/pie-chart.types';

export interface DataChartProps {
  label: string;
  description: string;
  value: string | number;
}

export interface BaseChartProps {
  width?: number | string;
  height?: number | string;
  data: Array<DataChartProps>;
}

export interface AreaChartProps extends BaseChartProps {
  variant: 'area';
  lineType?: 'monotone';
  withDots?: boolean;
}

export interface LineChartProps extends BaseChartProps {
  variant: 'line';
  lineType?: 'monotone';
  withDots?: boolean;
}

export interface BarChartProps extends BaseChartProps {
  variant: 'bar';
}

export interface PieChartProps extends BaseChartProps {
  label: string;
  variant: 'pie';
  semanticColors: ReadonlyArray<TSemenaticColors>;
}

export type ChartsProps =
  | AreaChartProps
  | LineChartProps
  | BarChartProps
  | PieChartProps;
