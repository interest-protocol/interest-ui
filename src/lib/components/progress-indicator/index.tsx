import stylin, { variant } from '@stylin.js/react';
import { Box } from '../../elements';
import React, { FC, PropsWithChildren } from 'react';
import { ProgressElementProps, ProgressProps } from '../progress-indicator';
import { useTheme } from '@emotion/react';
import { Theme } from '../../theme';

const ProgressBarElement = stylin<ProgressElementProps>('progress')(
  variant({
    scale: 'progress',
    property: 'variant',
  })
);

const ProgressCirlceElement = stylin<ProgressElementProps>('div')(
  variant({
    scale: 'progress',
    property: 'variant',
  })
);

export const Progress: FC<PropsWithChildren<ProgressProps>> = ({
  ...props
}) => {
  const theme = useTheme() as Theme;

  return (
    <>
      {props.variant === 'bar' ? (
        <ProgressBarElement
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
      ) : props.variant === 'circle' ? (
        <ProgressCirlceElement
          {...props}
          position={'relative'}
          width={props.size || 50}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          borderRadius={'50%'}
          height={props.size || 50}
          backgroundImage={
            props.value
              ? 'conic-gradient( ' +
                theme.colors.accent +
                ' ' +
                props.value +
                '%,' +
                theme.colors.background +
                ' ' +
                props.value +
                '%)'
              : ''
          }
        >
          <Box
            width={'80%'}
            height={'80%'}
            background={'background'}
            borderRadius={'50%'}
          ></Box>
        </ProgressCirlceElement>
      ) : null}
    </>
  );
};

export * from './progress-indicator.types';
