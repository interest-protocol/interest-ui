import { StylinComponentProps } from '@stylin.js/react';

import { BoxProps } from '../../elements';

export type ProgressVariants = 'bar' | 'circle' | 'loading';

export type ProgressStatus =
  | 'success'
  | 'warning'
  | 'primary'
  | 'normal'
  | 'error';

export interface ProgressItemProps
  extends Omit<StylinComponentProps, 'height'>,
    Omit<BoxProps, 'variant' | 'height'> {
  size?: number;
  value: number;
  isRounded?: boolean;
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
