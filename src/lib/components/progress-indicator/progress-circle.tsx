import { useTheme } from '@emotion/react';
import React, { FC, PropsWithChildren, useId } from 'react';

import { Motion } from '../../elements';
import { Theme } from '../../theme';
import CirclePath from './circle-path';
import { ProgressItemProps } from './progress-indicator.types';

export const ProgressCircle: FC<PropsWithChildren<ProgressItemProps>> = ({
  value,
  size = 50,
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
                  `conic-gradient(${colors.container} 0%, ${colors.primary} 0%, ${colors.primary} 0%, ${colors.container} 0%)`,
                  `conic-gradient(${colors.container} 0%, ${colors.primary} 0%,  ${colors.primary} 100%, ${colors.container} 100%)`,
                  `conic-gradient(${colors.container} 100%, ${colors.primary} 100%, ${colors.primary} 100%, ${colors.container} 100%)`,
                ],
              },
            }
          : {
              initial: {
                backgroundImage: `conic-gradient(${colors.primary} 0%, ${colors.container} 0%)`,
              },
              animate: {
                backgroundImage: `conic-gradient(${colors.primary} ${value}%, ${colors.container} ${value}%)`,
              },
            })}
      />
    </>
  );
};
