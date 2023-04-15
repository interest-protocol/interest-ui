import { InputHTMLAttributes } from 'react';

export type InputElementProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'translate' | 'height' | 'width'
>;
export interface SliderProps {
  min: number;
  max: number;
  value: number;
  step?: number;
  initial?: number;
}
