import { InputHTMLAttributes, LabelHTMLAttributes } from 'react';

export type CheckedButtonElementProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'width' | 'height' | 'size'
>;

export type LabelElementProps = Omit<
  LabelHTMLAttributes<HTMLInputElement>,
  'color' | 'width' | 'height' | 'size'
>;
export interface CheckedButtonProps extends CheckedButtonElementProps {
  name: string;
  hideLabel?: boolean;
  options: ReadonlyArray<string>;
  initialValue: boolean;
}
