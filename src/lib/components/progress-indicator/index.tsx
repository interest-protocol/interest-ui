import React, { FC, PropsWithChildren } from 'react';
import { ProgressProps } from '../progress-indicator';
import { ProgressBar } from './bar';
import { ProgressCircle } from './circle';

export const Progress: FC<PropsWithChildren<ProgressProps>> = ({
  variant,
  value,
}) => {
  if (variant === 'circle')
    return <ProgressCircle variant={'circle'} value={value} />;

  return <ProgressBar variant={'circle'} value={value} />;
};

export * from './progress-indicator.types';
