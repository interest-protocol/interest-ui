import { TSemenaticColors } from './circle-chart/circle-chart.types';

export interface BaseChartProps {
  data: any;
  height?: number | string;
  width?: number | string;
}

export interface PieChartProps extends BaseChartProps {
  variant: 'pie';
  label: string;
  semanticColors: ReadonlyArray<TSemenaticColors>;
}

export interface CommonChartsProps extends BaseChartProps {
  variant: 'bar' | 'steps' | 'area';
}

export type ChartsProps = PieChartProps | CommonChartsProps;
