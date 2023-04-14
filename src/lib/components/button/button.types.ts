import { StylinComponentProps } from '@stylin.js/react';
import { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonVariants } from '../../theme/theme.types';

export type ButtonElementProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'color' | 'translate'
>;

export interface ButtonProps extends StylinComponentProps, ButtonElementProps {
  variant: ButtonVariants;
  SuffixIcon?: ReactNode;
  PrefixIcon?: ReactNode;
}
