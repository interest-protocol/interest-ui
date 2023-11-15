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

export type CombinedButtonProps = Omit<StylinComponentProps, 'transition'> &
  ButtonElementProps & {
    variant: ButtonVariants;
  };

export interface IconButton extends CombinedButtonProps {
  isIcon: true;
}

export interface NoIconButton extends CombinedButtonProps {
  SuffixIcon?: ReactNode;
  PrefixIcon?: ReactNode;
}

export type ButtonProps = IconButton | NoIconButton;
