import { StylinComponentProps } from '@stylin.js/react';
import { InputHTMLAttributes } from 'react';
import { SliderVariants } from '../../theme';

export type InputElementProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'translate' | 'height' | 'width'
>;
