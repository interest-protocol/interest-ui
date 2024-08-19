import { useTheme } from '@emotion/react';
import React, { FC, PropsWithChildren, useId } from 'react';

import { Motion } from '../../elements';
import { Theme } from '../../theme';
import CirclePath from './circle-path';
import { ProgressItemProps } from './progress-indicator.types';
import { getProgressColor } from './progress-indicator.utils';

export const ProgressCircle: FC<PropsWithChildren<ProgressItemProps>> = ({
  value,
  status,
  size = 50,
  noAnimation,
}) => {
  const id = useId();
  const clipPathId = `clipPath-${id}`;
  const { colors } = useTheme() as Theme;

  return (
    <>
      <CirclePath size={size} id={clipPathId} />
      <Motion
        width={size}
        height={size}
        clipPath={`url(#${clipPathId})`}
        transition={{
          ease: 'linear',
          ...(value < 0
            ? { duration: 1.5, repeat: Infinity }
            : { duration: 0.5 }),
        }}
        {...(value < 0
          ? {
              animate: {
                backgroundImage: [
                  `conic-gradient(${colors.container} 0%, ${getProgressColor(
                    colors,
                    status
                  )} 0%, ${getProgressColor(colors, status)} 0%, ${
                    colors.container
                  } 0%)`,
                  `conic-gradient(${colors.container} 0%, ${getProgressColor(
                    colors,
                    status
                  )} 0%,  ${getProgressColor(colors, status)} 100%, ${
                    colors.container
                  } 100%)`,
                  `conic-gradient(${colors.container} 100%, ${getProgressColor(
                    colors,
                    status
                  )} 100%, ${getProgressColor(colors, status)} 100%, ${
                    colors.container
                  } 100%)`,
                ],
              },
            }
          : {
              initial: {
                backgroundImage: noAnimation
                  ? `conic-gradient(${getProgressColor(
                      colors,
                      status
                    )} ${value}%, ${colors.container} ${value}%)`
                  : `conic-gradient(${getProgressColor(colors, status)} 0%, ${
                      colors.container
                    } 0%)`,
              },
              animate: {
                backgroundImage: `conic-gradient(${getProgressColor(
                  colors,
                  status
                )} ${value}%, ${colors.container} ${value}%)`,
              },
            })}
      />
    </>
  );
};
