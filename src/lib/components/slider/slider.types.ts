import { InputHTMLAttributes } from 'react';
import { IThumbProps } from 'react-range/lib/types';

export type InputElementProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'translate' | 'height' | 'width'
>;

export interface SliderProps {
  max: number;
  min?: number;
  step?: number;
  disabled?: boolean;
  bottomValue?: boolean;
  withoutTooltip?: boolean;
  showZeroValue?: boolean;
  onChange: (value: number) => void;
  initial?: number | [number, number];
}

export interface ThumbWrapperProps {
  thumbDetails: IThumbProps;
  disabled?: boolean;
}

export interface RangeTypeProps {
  value: number;
  disabled?: boolean;
  bottomValue?: boolean;
  withoutTooltip?: boolean;
  showZeroValue?: boolean;
}
