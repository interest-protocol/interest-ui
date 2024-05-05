import { InputHTMLAttributes, LabelHTMLAttributes } from 'react';

export type CheckedButtonElementProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'defaultValue' | 'size'
>;

export type LabelElementProps = Omit<
  LabelHTMLAttributes<HTMLInputElement>,
  'color'
>;
export interface CheckboxProps extends CheckedButtonElementProps {
  label?: string;
  name?: string;
  onClick: () => void;
  defaultValue: boolean;
  supportingText?: string;
  allowIndetermatedValue?: boolean;
}
