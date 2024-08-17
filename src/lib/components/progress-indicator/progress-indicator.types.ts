import { StylinComponentProps } from '@stylin.js/react';

import { BoxProps } from '../../elements';

export type ProgressVariants = 'bar' | 'special-bar' | 'circle' | 'loading';

export type ProgressStatus = 'normal' | 'success' | 'warning' | 'danger';

export interface ProgressItemProps
  extends StylinComponentProps,
    Omit<BoxProps, 'variant'> {
  size?: number;
  value: number;
  noAnimation?: boolean;
  status?: ProgressStatus;
  variant?: ProgressVariants;
}

export interface ProgressIndicatorProps
  extends Omit<ProgressItemProps, 'value'> {
  value?: number;
}

export interface CirclePathProps {
  id: string;
  size: number;
}
