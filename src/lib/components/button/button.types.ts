import { ButtonElementProps } from '@stylin.js/elements';
import { StylinComponentProps } from '@stylin.js/react';

export type ButtonVariants = 'filled' | 'outline' | 'text' | 'tonal';

export type ButtonProps = Omit<StylinComponentProps, 'transition'> &
  ButtonElementProps & {
    variant: ButtonVariants;
  };
