import { InputHTMLAttributes, LabelHTMLAttributes } from 'react';

export type CheckedButtonElementProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'defaultValue' | 'size'
>;

export type LabelElementProps = Omit<
  LabelHTMLAttributes<HTMLInputElement>,
  'color'
>;
export interface CheckedButtonProps extends CheckedButtonElementProps {
  name: string;
  activation?: boolean;
  defaultValue: boolean;
  size?: 'small' | 'medium';
  labels?: string | [string, string];
}
