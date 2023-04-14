import { InputHTMLAttributes } from 'react';

export type RadioButtonElementProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'width' | 'height' | 'size'
>;
export interface RadioButtonProps extends RadioButtonElementProps {
  name: string;
}
