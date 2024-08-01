import React, { FC, PropsWithChildren } from 'react';

import { Theme, useTheme } from '../..';
import { Box, Typography } from '../../elements';
import { ListItemProps } from './list-item.types';

export const ListItem: FC<PropsWithChildren<ListItemProps>> = ({
  title,
  onClick,
  disabled,
  metadata,
  SuffixIcon,
  PrefixIcon,
  fontFamily,
  description,
  ...props
}) => {
  const { colors } = useTheme() as Theme;

  return (
    <Box
      py="l"
      px="xs"
      gap="xs"
      display="flex"
      role="listitem"
      onClick={onClick}
      position="relative"
      alignItems="center"
      background="surface.container"
      cursor={disabled ? 'not-allowed' : 'pointer'}
      maxHeight={description ? '4.75rem' : '3.5rem'}
      transition="background-color 300ms ease-in-out"
      width={['100%', '100%', '14.9375rem', '14.9375rem']}
      nHover={{ bg: disabled ? 'transparent' : colors.primary + '14' }}
      {...props}
    >
      {PrefixIcon && (
        <Box
          display="flex"
          width="1.5rem"
          height="1.5rem"
          color="onSurface"
          alignItems="center"
          justifyContent="center"
          opacity={disabled ? 0.32 : 1}
        >
          {PrefixIcon}
        </Box>
      )}

      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        opacity={disabled ? 0.32 : 1}
      >
        <Typography
          as="span"
          size="medium"
          variant="body"
          color="onSurface"
          fontFamily={fontFamily}
        >
          {title}
        </Typography>
        {description && (
          <Typography
            as="span"
            size="small"
            variant="body"
            fontFamily={fontFamily}
            color="onSurfaceVariant"
          >
            {description}
          </Typography>
        )}
      </Box>
      {metadata && (
        <Typography
          ml="l"
          as="span"
          size="small"
          variant="body"
          fontFamily={fontFamily}
          color="onSurfaceVariant"
          opacity={disabled ? 0.32 : 1}
          mr={SuffixIcon ? '2xl' : 'unset'}
        >
          {metadata}
        </Typography>
      )}
      {SuffixIcon && SuffixIcon}
    </Box>
  );
};
export * from './list-item.types';
