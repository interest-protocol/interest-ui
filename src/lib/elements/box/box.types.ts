import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes, RefObject } from 'react';

import { lightTheme } from '../../theme';

export type BoxElementProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'color' | 'translate' | 'content'
>;

export interface BoxProps extends StylinComponentProps, BoxElementProps {
  as?: keyof JSX.IntrinsicElements;
  ref?: RefObject<HTMLDivElement>;
  variant?: keyof (typeof lightTheme)['boxes'];
}
