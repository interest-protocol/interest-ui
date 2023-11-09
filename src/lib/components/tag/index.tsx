import { useTheme } from '@emotion/react';
import { easeInOut } from 'framer-motion';
import React, { FC } from 'react';

import { Box, Motion, Typography } from '../../elements';
import { TimesSVG } from '../../icons';
import { Theme } from '../../theme';
import { TagProps } from './tag.types';

export const Tag: FC<TagProps> = ({
  size,
  label,
  onClose,
  variant,
  dismiss,
  disabled,
  PrefixIcon,
}) => {
  const { colors } = useTheme() as Theme;
  return (
    <Motion
      as="span"
      bg="white"
      display="flex"
      width="fit-content"
      borderRadius="full"
      alignItems="center"
      justifyContent="center"
      opacity={disabled ? 0.32 : 1}
      pr={dismiss ? '2xs' : '.625rem'}
      pl={PrefixIcon ? '2xs' : '.625rem'}
      py={size === 'small' ? '.125rem' : '2xs'}
      cursor={disabled ? 'not-allowed' : 'pointer'}
      columnGap={size === 'small' ? '2xs' : '.375rem'}
      border={
        variant === 'outline' ? '1px solid ' + colors['outlineVariant'] : 'none'
      }
      whileFocus={{
        color: variant !== 'outline' && size !== 'large' ? 'white' : 'inherit',
        backgroundColor:
          variant === 'outline' && size === 'large'
            ? 'white'
            : colors['onPrimary'],
        transition: { duration: 0.005, ease: easeInOut },
      }}
      whileHover={{
        borderColor:
          variant === 'outline' && size === 'large' && dismiss
            ? colors['outline']
            : colors['primary'],
        backgroundColor:
          variant === 'filled' ? '#00000014' : colors['primary'] + '14',
        transition: { duration: 0.005, ease: easeInOut },
      }}
    >
      {PrefixIcon && (
        <Box
          p="2xs"
          bg="black"
          display="flex"
          color="white"
          borderRadius="full"
          alignItems="center"
          justifyContent="center"
          width={size === 'large' ? '1.5rem' : 'm'}
          height={size === 'large' ? '1.5rem' : 'm'}
        >
          <PrefixIcon
            maxWidth={size === 'large' ? '.875rem' : '.75rem'}
            maxHeight={size === 'large' ? '.875rem' : '.75rem'}
            width="100%"
          />
        </Box>
      )}
      <Typography
        variant={
          size === 'large'
            ? 'large'
            : size === 'medium'
            ? 'small'
            : size === 'small'
            ? 'extraSmall'
            : 'large'
        }
      >
        {label}
      </Typography>
      {dismiss && (
        <Box
          p="2xs"
          display="flex"
          onClick={onClose}
          alignItems="center"
          justifyContent="center"
        >
          <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Box>
      )}
    </Motion>
  );
};

export * from './tag.types';
