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

  if (variant === 'bar') return <ProgressBar variant="bar" value={value} />;

  if (variant === 'rotating')
    return (
      <ProgressCircleRotating
        size={size || 50}
        strokeWidth={strokeWidth || 8}
      />
    );

  return <ProgressBar variant="bar" value={value} />;
};

export * from './progress-indicator.types';