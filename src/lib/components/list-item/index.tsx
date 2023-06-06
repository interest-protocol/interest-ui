import React, { FC, PropsWithChildren } from 'react';

import { Box, Typography } from '../../elements';
import { ListItemProps } from './list-item.types';

export const ListItem: FC<PropsWithChildren<ListItemProps>> = ({
  title,
  onClick,
  metadata,
  SuffixIcon,
  PrefixIcon,
  description,
  ...props
}) => (
  <Box
    py="l"
    px="2xl"
    display="flex"
    position="relative"
    alignItems="center"
    background="surface.container"
    width={['100%', '100%', '22.5rem', '22.5rem']}
    maxHeight={description ? '4.75rem' : '3.5rem'}
    {...props}
    onClick={onClick}
  >
    {PrefixIcon && (
      <Box mr="2xl" color="onSurface">
        {PrefixIcon}
      </Box>
    )}

    <Box display="flex" flexDirection="column" width="100%">
      <Typography as="span" variant="medium" fontWeight="400" color="onSurface">
        {title}
      </Typography>
      {description && (
        <Typography as="span" variant="small" color="onSurfaceVariant">
          {description}
        </Typography>
      )}
    </Box>
    {metadata && (
      <Typography
        ml="l"
        as="span"
        variant="extraSmall"
        color="onSurfaceVariant"
        mr={SuffixIcon ? '2xl' : 'unset'}
      >
        {metadata}
      </Typography>
    )}
    {SuffixIcon && SuffixIcon}
  </Box>
);

export * from './list-item.types';
