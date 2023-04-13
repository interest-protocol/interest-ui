import { useTheme } from '@emotion/react';
import stylin, { variant } from '@stylin.js/react';
import React, { FC, PropsWithChildren } from 'react';
import {
  ProgressElementProps,
  ProgressProps,
} from './progress-indicator.types';
import { Theme } from '../../theme';
import { Box } from '../../elements';

const ProgressCirlceElement = stylin<ProgressElementProps>('div')(
  variant({
    scale: 'progress',
    property: 'variant',
  })
);

export const ProgressCircle: FC<PropsWithChildren<ProgressProps>> = ({
  value,
  size,
}) => {
  const theme = useTheme() as Theme;
  return (
    <ProgressCirlceElement
      display="flex"
      borderRadius="50%"
      alignItems="center"
      position="relative"
      justifyContent="center"
      width={size || '3.125rem'}
      height={size || '3.125rem'}
      backgroundImage={
        value
          ? 'conic-gradient( ' +
            theme.colors.accent +
            ' ' +
            value +
            '%,' +
            theme.colors.background +
            ' ' +
            value +
            '%)'
          : ''
      }
    >
      <Box
        width="80%"
        height="80%"
        borderRadius="50%"
        background="background"
      />
    </ProgressCirlceElement>
  );
};
