import { StylinComponentProps } from '@stylin.js/react';
import { FC, InputHTMLAttributes, ReactNode } from 'react';

import { MotionProps } from '../../elements/motion/motion.types';
import { SVGProps } from '../../icons/icons.types';

export type TokenFieldElementProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'translate' | 'height' | 'width' | 'content'
>;

export interface TokenFieldProps
  extends StylinComponentProps,
    TokenFieldElementProps {
  error?: string;
  valid?: string;
  outlined?: boolean;
  label?: string;
  tokenName: string;
  suffix?: ReactNode;
  disabled?: boolean;
  supportingText?: string;
  fieldProps?: MotionProps;
  TokenIcon?: FC<SVGProps>;
  variant?: 'filled' | 'outline';
  labelPosition?: 'left' | 'right';
}
