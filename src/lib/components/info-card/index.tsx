import { useTheme } from '@emotion/react';
import React, { FC, PropsWithChildren } from 'react';

import { Box, Typography } from '../../elements';
import { Theme } from '../../theme';
import { InfoCardProps } from './info-card.types';

export const InfoCard: FC<PropsWithChildren<InfoCardProps>> = ({
  info,
  title,
  onClick,
  width,
  children,
}) => {
  const { dark } = useTheme() as Theme;

  return (
    <Box
      p="m"
      width={width ?? '15rem'}
      height="7.5rem"
      borderRadius="m"
      overflow="hidden"
      border="1px dashed"
      display="inline-flex"
      flexDirection="column"
      justifyContent="space-between"
      borderColor="outline.outlineVariant"
      color={dark ? 'white' : 'onSurface'}
      {...(onClick && { onClick, cursor: 'pointer' })}
    >
      <Box display="flex" justifyContent="space-between">
        <Typography variant="small">{title}</Typography>
        <Typography variant="small">{info}</Typography>
      </Box>
      <Typography variant="title6" mt="2xl">
        {children}
      </Typography>
    </Box>
  );
};

export * from './info-card.types';
