import { StylinComponentProps } from '@stylin.js/react';
import { ProgressHTMLAttributes, ReactNode } from 'react';

import { ProgressVariants } from '../../theme/theme.types';

export type ProgressElementProps = Omit<
  ProgressHTMLAttributes<HTMLProgressElement>,
  'color' | 'translate'
>;

export interface ProgressProps
  extends StylinComponentProps,
    ProgressElementProps {
  variant: ProgressVariants;
  value: 0 | 25 | 50 | 75 | 100;
}
