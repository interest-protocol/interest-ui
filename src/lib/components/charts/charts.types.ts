import { TSemenaticColors } from './pie-chart/pie-chart.types';

export interface DataChartProps {
  [key: string]: string | number;
}

export interface BaseChartProps {
  data: Array<DataChartProps>;
  height?: number | string;
  width?: number | string;
}

export interface LineChartProps extends BaseChartProps {
  lineType?: 'monotone';
  withDots?: boolean;
}

export interface PieChartProps extends BaseChartProps {
  variant: 'pie';
  label: string;
  semanticColors: ReadonlyArray<TSemenaticColors>;
}

export interface CommonChartsProps extends BaseChartProps {
  variant: 'bar' | 'area' | 'line';
}

export type ChartsProps = PieChartProps | CommonChartsProps;
