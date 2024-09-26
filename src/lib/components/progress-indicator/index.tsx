import React, { FC, PropsWithChildren } from 'react';

import { Box } from '../../elements';
import { ProgressIndicatorProps } from '../progress-indicator';
import { ProgressBar } from './progress-bar';
import { ProgressCircle } from './progress-circle';

export const ProgressIndicator: FC<
  PropsWithChildren<ProgressIndicatorProps>
> = ({ size, value, status, variant, isRounded, ...props }) => {
  if (variant === 'bar')
    return (
      <ProgressBar
        isRounded={isRounded}
        value={value ?? 0}
        status={status}
        size={size}
        {...props}
      />
    );

  return (
    <Box role="progressbar" aria-label="circle">
      <ProgressCircle
        size={size}
        status={status}
        value={variant === 'loading' ? -1 : value ?? 0}
        {...props}
      />
    </Box>
  );
};

export * from './progress-indicator.types';
