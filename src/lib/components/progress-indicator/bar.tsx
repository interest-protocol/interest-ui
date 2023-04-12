import { useTheme } from '@emotion/react';
import stylin, { variant } from '@stylin.js/react';
import React, { FC, PropsWithChildren } from 'react';
import {
  ProgressElementProps,
  ProgressProps,
} from './progress-indicator.types';
import { Theme } from '../../theme';

const ProgressBarElement = stylin<ProgressElementProps>('progress')(
  variant({
    scale: 'progress',
    property: 'variant',
  })
);

export const ProgressBar: FC<PropsWithChildren<ProgressProps>> = ({
  value,
}) => {
  const theme = useTheme() as Theme;
  return (
    <ProgressBarElement
      max={100}
      height={4}
      width="100%"
      borderRadius={0}
      appearance="none"
      value={value}
      nWebkitProgressBar={{
        backgroundColor: theme.colors.accent + '1F',
      }}
      nWebkitProgressValue={{
        backgroundColor:
          value <= 50
            ? theme.colors.success
            : value <= 75
            ? theme.colors.warning
            : value <= 100
            ? theme.colors.error
            : 'transparent',
      }}
    />
  );
};
