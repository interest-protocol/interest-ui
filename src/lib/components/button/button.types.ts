import { StylinComponentProps } from '@stylin.js/react';
import { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonVariants } from '../../theme/theme.types';

export type ButtonElementProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  | 'color'
  | 'translate'
  | 'content'
  | 'onAnimationStart'
  | 'onDragStart'
  | 'onDragEnd'
  | 'onDrag'
>;

export interface ButtonProps
  extends Omit<StylinComponentProps, 'transition'>,
    ButtonElementProps {
  variant: ButtonVariants;
  SuffixIcon?: ReactNode;
  PrefixIcon?: ReactNode;
}
