import { useTheme } from '@emotion/react';
import stylin from '@stylin.js/react';
import React, { FC, PropsWithChildren } from 'react';

import { Theme } from '../../theme';
import {
  ProgressElementProps,
  ProgressItemProps,
} from './progress-indicator.types';
import { getProgressBarColor } from './progress-indicator.utils';

const ProgressBarElement = stylin<ProgressElementProps>('progress')();

export const ProgressBar: FC<PropsWithChildren<ProgressItemProps>> = ({
  value,
}) => {
  const { colors } = useTheme() as Theme;

  return (
    <ProgressBarElement
      max="100"
      width="100%"
      value={value}
      height="0.25rem"
      appearance="none"
      nWebkitProgressBar={{
        backgroundColor: 'surface.surfaceVariant',
      }}
      nWebkitProgressValue={{
        background: getProgressBarColor(value, colors),
      }}
    />
  );
};
