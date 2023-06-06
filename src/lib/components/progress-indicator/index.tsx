import React, { FC, PropsWithChildren } from 'react';

import { ProgressIndicatorProps } from '../progress-indicator';
import { ProgressBar } from './progress-bar';
import { ProgressCircle } from './progress-circle';

export const ProgressIndicator: FC<
  PropsWithChildren<ProgressIndicatorProps>
> = ({ size, value, variant, ...props }) => {
  if (variant === 'bar') return <ProgressBar value={value ?? 0} {...props} />;

  return (
    <ProgressCircle
      size={size}
      value={variant === 'loading' ? -1 : value ?? 0}
      {...props}
    />
  );
};

export * from './progress-indicator.types';
