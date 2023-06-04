import { InputHTMLAttributes } from 'react';

export type InputElementProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'translate' | 'height' | 'width'
>;

export interface SliderProps {
  max: number;
  min?: number;
  step?: number;
  initial?: number;
  disabled?: boolean;
  onChange: (value: number) => void;
}
