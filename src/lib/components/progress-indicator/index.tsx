import React, { FC, PropsWithChildren } from 'react';
import { ProgressProps } from '../progress-indicator';
import { ProgressBar } from './bar';
import { ProgressCircle } from './circle';
import ProgressCircleRotating from './rotating';

export const Progress: FC<PropsWithChildren<ProgressProps>> = ({
  variant,
  value,
  size,
  strokeWidth,
}) => {
  if (variant === 'circle')
    return <ProgressCircle variant="circle" value={value} />;

  if (variant === 'rotating')
    return (
      <ProgressCircleRotating
        size={size || '3.125rem'}
        strokeWidth={strokeWidth || '.5rem'}
      />
    );

  return <ProgressBar variant="bar" value={value} />;
};

export * from './progress-indicator.types';