import { useTheme } from '@emotion/react';
import React, { FC, PropsWithChildren } from 'react';

import { Box, Typography } from '../../elements';
import { Theme } from '../../theme';
import { ListItemProps } from './list-item.types';

export const ListItem: FC<PropsWithChildren<ListItemProps>> = ({
  title,
  description,
  onClick,
  metadata,
  SuffixIcon,
  PrefixIcon,
  ...props
}) => {
  const theme = useTheme() as Theme;

  return (
    <Box
      py="l"
      px="2xl"
      display="flex"
      position="relative"
      alignItems="center"
      width={['100%', '100%', '22.5rem', '22.5rem']}
      maxHeight={description ? '4.75rem' : '3.5rem'}
      background={theme.colors.surface.container}
      {...props}
      onClick={onClick}
    >
      {PrefixIcon && (
        <Box mr="2xl" color={theme.colors.onSurface}>
          {PrefixIcon}
        </Box>
      )}

      <Box display="flex" flexDirection="column" width="100%">
        <Typography
          as="span"
          variant="medium"
          fontWeight="400"
          color={theme.colors.onSurface}
        >
          {title}
        </Typography>
        {description && (
          <Typography
            as="span"
            variant="small"
            color={theme.colors.onSurfaceVariant}
          >
            {description}
          </Typography>
        )}
      </Box>
      {metadata && (
        <Typography
          ml="l"
          as="span"
          variant="extraSmall"
          mr={SuffixIcon ? '2xl' : 'unset'}
          color={theme.colors.onSurfaceVariant}
        >
          {metadata}
        </Typography>
      )}
      {SuffixIcon && SuffixIcon}
    </Box>
  );
};

export * from './list-item.types';
