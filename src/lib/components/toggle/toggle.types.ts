import { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';

export type CheckedButtonElementProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'defaultValue' | 'size'
>;

export type LabelElementProps = Omit<
  LabelHTMLAttributes<HTMLInputElement>,
  'color'
>;

type MultipleLabels = { label?: string; supportingLabel?: string };
export interface CheckedButtonProps extends CheckedButtonElementProps {
  name: string;
  defaultValue: boolean;
  labels?: MultipleLabels;
  activeIcon?: ReactNode;
  inactiveIcon?: ReactNode;
}
