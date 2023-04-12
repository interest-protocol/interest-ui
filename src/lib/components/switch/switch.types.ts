import { InputHTMLAttributes, LabelHTMLAttributes } from 'react';

export type CheckedButtonElementProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'defaultValue'
>;

export type LabelElementProps = Omit<
  LabelHTMLAttributes<HTMLInputElement>,
  'color'
>;
export interface CheckedButtonProps extends CheckedButtonElementProps {
  name: string;
  hideLabel?: boolean;
  labels: [string, string];
  defaultValue: boolean;
}
