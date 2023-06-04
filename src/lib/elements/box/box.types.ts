import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

import { Boxes, Outline, Surface } from '../../theme';

export type BoxElementProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'color' | 'translate' | 'content'
>;

export interface BoxProps extends StylinComponentProps, BoxElementProps {
  as?: keyof JSX.IntrinsicElements;
  variant?: Boxes;
  surface?: Surface;
  outline?: Outline;
}
