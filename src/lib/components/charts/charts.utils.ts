import {
  AreaChartProps,
  BarChartProps,
  ChartsProps,
  LineChartProps,
  PieChartProps,
} from './charts.types';

export function isPieChart(props: ChartsProps): props is PieChartProps {
  return props.variant === 'pie';
}

export function isAreaChart(props: ChartsProps): props is AreaChartProps {
  return props.variant === 'area';
}

export function isLineChart(props: ChartsProps): props is LineChartProps {
  return props.variant === 'line';
}

export function isBarChart(props: ChartsProps): props is BarChartProps {
  return props.variant === 'bar';
}
