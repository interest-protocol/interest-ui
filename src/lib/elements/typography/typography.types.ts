import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes, RefAttributes } from 'react';

import { lightTheme } from '../../theme';

export type TypographyElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate' | 'content'
> &
  RefAttributes<unknown>;

export interface TypographyProps
  extends StylinComponentProps,
    TypographyElementProps {
  as?: keyof JSX.IntrinsicElements;
  variant: keyof (typeof lightTheme)['typography'];
}
