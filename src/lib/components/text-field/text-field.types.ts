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
  label?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  disabled?: boolean;
  supportingText?: string;
  fieldProps?: MotionProps;
}
