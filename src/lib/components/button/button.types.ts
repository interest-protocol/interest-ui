import { StylinComponentProps } from '@stylin.js/react';
import { ButtonHTMLAttributes } from 'react';

import { ButtonSizes, ButtonVariants } from '../../theme/theme.types';

export type ButtonElementProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'color' | 'translate'
>;

export type ButtonProps = StylinComponentProps &
  ButtonElementProps &
  (
    | {
        size: Omit<ButtonSizes, 'icon'>;
        variant: Omit<ButtonVariants, 'icon'>;
      }
    | {
        size: 'icon';
        variant: Omit<ButtonVariants, 'text'>;
      }
  );
