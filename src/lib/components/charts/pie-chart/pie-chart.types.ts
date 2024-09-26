import { BaseChartProps } from '../charts.types';
export type TSemenaticColors = Record<'light' | 'dark', string>;

interface Props {
  label?: string;
  semanticColors: ReadonlyArray<TSemenaticColors>;
}

export type PieChartProps = BaseChartProps & Props;
