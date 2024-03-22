import { useTheme } from '@emotion/react';
import React, { FC, PropsWithChildren } from 'react';

import { Box, Typography } from '../../elements';
import { Theme } from '../../theme';
import { InfoCardProps } from './info-card.types';

export const InfoCard: FC<PropsWithChildren<InfoCardProps>> = ({
  title,
  onClick,
  width,
  children,
  Icon,
}) => {
  const { dark } = useTheme() as Theme;

  return (
    <Box
      px="m"
      py="xl"
      gap="m"
      width="100%"
      bg="onPrimary"
      minWidth="6rem"
      borderRadius="xs"
      overflowX="auto"
      display="inline-flex"
      flexDirection="column"
      maxWidth={width ?? '26.75rem'}
      justifyContent="space-between"
      color={dark ? 'lowestContainer' : 'onSurface'}
      {...(onClick && { onClick, cursor: 'pointer' })}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography mr="m" variant="label" size="large">
          {title}
        </Typography>
        {Icon && (
          <Box
            bg="surface"
            padding="2xs"
            width="2.5rem"
            display="flex"
            height="2.5rem"
            minWidth="2.5rem"
            minHeight="2.5rem"
            borderRadius="50%"
            alignItems="center"
            justifyContent="center"
          >
            {Icon}
          </Box>
        )}
      </Box>
      <Typography size="large" lineHeight="l" variant="title" color="#000000A3">
        {children}
      </Typography>
    </Box>
  );
};

export * from './info-card.types';
