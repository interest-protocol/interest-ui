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

export interface BaseAreaLineChartProps extends BaseChartProps {
  lineType?: 'monotone';
  withDots?: boolean;
}

export interface AreaChartProps extends BaseAreaLineChartProps {
  variant: 'area';
}

export interface LineChartProps extends BaseAreaLineChartProps {
  variant: 'line';
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
