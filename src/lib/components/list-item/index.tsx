import { useTheme } from '@emotion/react';
import React, { FC, PropsWithChildren } from 'react';

import { Box, Typography } from '../../elements';
import { Theme } from '../../theme';
import { ListItemProps } from './list-item.types';

export const ListItem: FC<PropsWithChildren<ListItemProps>> = ({
  title,
  description,
  metadata,
  SuffixIcon,
  PrefixIcon,
  ...props
}) => {
  const { dark } = useTheme() as Theme;

  return (
    <Box
      py="l"
      px="2xl"
      display="flex"
      position="relative"
      alignItems="center"
      width={['100%', '100%', '22.5rem', '22.5rem']}
      maxHeight={description ? '4.75rem' : '3.5rem'}
      background={
        dark
          ? 'linear-gradient(0deg, #b6c4ff0a, #b6c4ff0a), #1B1B1F'
          : 'linear-gradient(0deg, #0055ff0a, #0055ff0a), #F2F0F4'
      }
      {...props}
    >
      {PrefixIcon && (
        <Box mx="4xl" color={dark ? 'textDisabled' : 'secondary'}>
          {PrefixIcon}
        </Box>
      )}
      <Box display="flex" flexDirection="column" ml="2xl" width="100%">
        <Typography
          as="span"
          variant="medium"
          fontWeight="400"
          color={dark ? 'textDisabled' : 'secondary'}
        >
          {title}
        </Typography>
        {description && (
          <Typography
            as="span"
            variant="small"
            color={dark ? 'textSoft' : 'foreground'}
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
          color={dark ? 'textSoft' : 'foreground'}
        >
          {metadata}
        </Typography>
      )}
      {SuffixIcon && SuffixIcon}
    </Box>
  );
};

export * from './list-item.types';
