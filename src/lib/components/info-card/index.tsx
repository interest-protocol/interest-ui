import React, { FC, PropsWithChildren } from 'react';

import { Box, Typography } from '../../elements';
import { InfoCardProps } from './info-card.types';

export const InfoCard: FC<PropsWithChildren<InfoCardProps>> = ({
  info,
  title,
  IconInfo,
  IconTitle,
  iconInfoColor,
  infoColor,
  onClick,
  children,
}) => {
  return (
    <Box
      height="8.375rem"
      p="l"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      border="1px dashed"
      borderColor={'outline.outlineVariant'}
      borderRadius="m"
      {...(onClick && { onClick, cursor: 'pointer' })}
    >
      <Box
        display="flex"
        gap="xs"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Box display="flex">
          {IconTitle && (
            <Box
              width="1.25rem"
              minWidth="1.25rem"
              height="1.25rem"
              minHeight="1.25rem"
              bg="onSurface"
              color="inverseOnSurface"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="full"
              mr="s"
            >
              {IconTitle}
            </Box>
          )}
          <Typography
            variant="small"
            fontWeight="500"
            color="secondary.onSecondaryContainer"
            fontSize={['xs', 'xs', 'xs', 's']}
          >
            {title}
          </Typography>
        </Box>
        <Box display="flex">
          {IconInfo && (
            <Box height="0.719rem" width="1.11rem" mr="s" color={iconInfoColor}>
              {IconInfo}
            </Box>
          )}
          <Typography
            variant="small"
            fontWeight="500"
            color={
              infoColor == 'normal'
                ? 'secondary.onSecondaryContainer'
                : infoColor
            }
            fontSize={['xs', 'xs', 'xs', 's']}
          >
            {info}
          </Typography>
        </Box>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export * from './info-card.types';
