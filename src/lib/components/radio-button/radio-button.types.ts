import { InputHTMLAttributes } from 'react';

export interface RadioButtonProps extends RadioElementProps {
  selected: boolean;
  onClick?: () => void;
  size?: string;
  color?: string;
  innerSize?: string;
}

export type RadioElementProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'defaultValue' | 'size'
>;
