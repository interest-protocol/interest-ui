import { useTheme } from '@emotion/react';
import React, { FC, PropsWithChildren } from 'react';

import { Box, Typography } from '../../elements';
import { MoneySignSVG } from '../../icons';
import { Theme } from '../../theme';
import { InfoCardProps } from './info-card.types';

export const InfoCard: FC<PropsWithChildren<InfoCardProps>> = ({
  title,
  onClick,
  width,
  children,
}) => {
  const { dark } = useTheme() as Theme;

  return (
    <Box
      px="m"
      py="xl"
      bg="onPrimary"
      height="8.25rem"
      borderRadius="m"
      overflow="hidden"
      display="inline-flex"
      flexDirection="column"
      width={width ?? '26.75rem'}
      justifyContent="space-between"
      color={dark ? 'white' : 'onSurface'}
      {...(onClick && { onClick, cursor: 'pointer' })}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="label" size="large">
          {title}
        </Typography>
        <Box
          bg="surface"
          padding="2xs"
          width="2.5rem"
          display="flex"
          height="2.5rem"
          borderRadius="50%"
          alignItems="center"
          justifyContent="center"
        >
          <MoneySignSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
        </Box>
      </Box>
      <Typography size="large" lineHeight="l" variant="title" color="#000000A3">
        {children}
      </Typography>
    </Box>
  );
};

export * from './info-card.types';
