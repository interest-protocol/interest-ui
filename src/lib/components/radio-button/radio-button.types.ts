import { InputHTMLAttributes, LabelHTMLAttributes } from 'react';

export type RadioButtonElementProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'width' | 'height' | 'size'
>;

export type LabelElementProps = Omit<
  LabelHTMLAttributes<HTMLInputElement>,
  'color' | 'width' | 'height' | 'size'
>;
export interface RadioButtonProps extends RadioButtonElementProps {
  name: string;
  size: string;
  hideLabel?: boolean;
  options: ReadonlyArray<{ label: string; value: string }>;
  initialValue: string;
}
