import { ChartsProps, PieChartProps } from './charts.types';

export const isPieChart = (props: ChartsProps): props is PieChartProps =>
  props.variant === 'pie';
