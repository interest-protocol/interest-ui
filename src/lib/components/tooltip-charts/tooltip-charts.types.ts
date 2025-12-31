import { TooltipProps } from 'recharts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TooltipChartProps = TooltipProps<any, any> & {
  title?: string;
  label?: string | number;
  showPayloadWithName?: boolean;
  payload?: ReadonlyArray<TooltipPayloadProps>;
  labelMap?: Record<string, string>;
};
interface TooltipPayloadProps {
  value: number;
  name: string | number;
  color: string;
}
