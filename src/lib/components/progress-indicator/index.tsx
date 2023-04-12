import stylin, { variant } from '@stylin.js/react';
import { Box } from '../../elements';
import React, { FC, PropsWithChildren } from 'react';
import { ProgressElementProps, ProgressProps } from '../progress-indicator';
import { useTheme } from '@emotion/react';
import { Theme } from '../../theme';

const ProgressElement = stylin<ProgressElementProps>('progress')(
  variant({
    scale: 'progresss',
    property: 'variant',
  })
);

export const Progress: FC<PropsWithChildren<ProgressProps>> = ({
  ...props
}) => {
  const theme = useTheme() as Theme;

  return (
    <ProgressElement
      {...props}
      value={props.value}
      width={'100%'}
      height={4}
      max={100}
      borderRadius={0}
      appearance={'none'}
      nWebkitProgressBar={{
        backgroundColor: theme.colors.accent + '1F',
      }}
      nWebkitProgressValue={{
        backgroundColor:
          props.value === 25 || props.value === 50
            ? theme.colors.success
            : props.value === 75
            ? theme.colors.warning
            : props.value === 100
            ? theme.colors.error
            : 'transparent',
      }}
    />
  );
};

export * from './progress-indicator.types';
