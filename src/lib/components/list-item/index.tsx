import { useTheme } from '@emotion/react';
import React, { FC, PropsWithChildren } from 'react';

import { Box, Typography } from '../../elements';
import { Theme } from '../../theme';
import { Button } from '../button';
import { ListItemProps } from './list-item.types';

export const ListItem: FC<PropsWithChildren<ListItemProps>> = ({
  title,
  description,
  metadata,
  SuffixIcon,
  PrefixIcon,
}) => {
  const theme = useTheme() as Theme;
  return (
    <Box
      width={['100%', '100%', '22.5rem', '22.5rem']}
      maxHeight={description ? '4.75rem' : '3.5rem'}
      background="specialBackground"
      py="l"
      pr="2xl"
      display="flex"
      alignItems="center"
      position="relative"
    >
      {PrefixIcon && (
        <Button
          width="0.313rem"
          height="0.625rem"
          color={theme.dark ? '#F2F0F4' : '#001133'}
          ml="2.125rem"
          variant="icon"
        >
          {PrefixIcon}
        </Button>
      )}
      <Box display="flex" flexDirection="column" ml="2xl" width="100%">
        <Typography
          variant="medium"
          as="span"
          fontWeight="400"
          color={theme.dark ? '#F2F0F4' : '#001133'}
        >
          {title}
        </Typography>
        {description && (
          <Typography
            variant="small"
            as="span"
            color={theme.dark ? '#ACAAAF' : '#47464A'}
          >
            {description}
          </Typography>
        )}
      </Box>
      {metadata && (
        <Typography
          variant="extraSmall"
          as="span"
          mr={SuffixIcon ? '2xl' : 'unset'}
          ml="l"
          color={theme.dark ? '#ACAAAF' : '#47464A'}
        >
          {metadata}
        </Typography>
      )}
      {SuffixIcon && SuffixIcon}
    </Box>
  );
};
export * from './list-item.types';
