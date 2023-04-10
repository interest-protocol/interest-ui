import {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  RefAttributes,
} from 'react';

export type RadioButtonElementProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'width' | 'height' | 'size'
>;

export type LabelElementProps = Omit<
  LabelHTMLAttributes<HTMLInputElement>,
  'color' | 'width' | 'height' | 'size'
>;

export type SpanElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate'
> &
  RefAttributes<unknown>;

export interface RadioButtonProps extends RadioButtonElementProps {
  label: string;
  name: string;
  size: string;
  hideLabel?: boolean;
}
