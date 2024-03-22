import { StylinComponentProps } from '@stylin.js/react';
import { ProgressHTMLAttributes } from 'react';

export type ProgressVariants = 'bar' | 'circle' | 'loading';

export type ProgressElementProps = Omit<
  ProgressHTMLAttributes<HTMLProgressElement>,
  'color' | 'translate' | 'content'
>;

export interface ProgressItemProps
  extends StylinComponentProps,
    ProgressElementProps {
  size?: number;
  value: number;
  noAnimation?: boolean;
}

export interface ProgressIndicatorProps
  extends Omit<ProgressItemProps, 'value'> {
  variant: ProgressVariants;
  value?: number;
}

export interface CirclePathProps {
  id: string;
  size: number;
}
