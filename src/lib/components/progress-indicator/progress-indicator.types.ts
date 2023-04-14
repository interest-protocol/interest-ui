import { StylinComponentProps } from '@stylin.js/react';
import { ProgressHTMLAttributes } from 'react';

export type ProgressVariants = 'bar' | 'circle' | 'loading';

export type ProgressElementProps = Omit<
  ProgressHTMLAttributes<HTMLProgressElement>,
  'color' | 'translate'
>;

export interface ProgressItemProps
  extends StylinComponentProps,
    ProgressElementProps {
  size?: number;
  value: number;
}

export interface ProgressIndicatorProps
  extends Omit<ProgressItemProps, 'value'> {
  variant: ProgressVariants;
  value?: number;
}

export interface CirclePathProps {
  size: number;
}
