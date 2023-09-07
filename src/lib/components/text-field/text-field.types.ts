import { StylinComponentProps } from '@stylin.js/react';
import { InputHTMLAttributes, ReactNode } from 'react';

import { MotionProps } from '../../elements/motion/motion.types';

export type TextFieldElementProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'translate' | 'height' | 'width' | 'content'
>;

export interface TextFieldProps
  extends StylinComponentProps,
    TextFieldElementProps {
  error?: string;
  valid?: string;
  Prefix?: ReactNode;
  Suffix?: ReactNode;
  Bottom?: ReactNode;
  Top?: ReactNode;
  SuffixIcon?: ReactNode;
  PrefixIcon?: ReactNode;
  fieldProps?: MotionProps;
}
