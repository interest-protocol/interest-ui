import stylin, { variant } from '@stylin.js/react';
import { CustomDomComponent, easeInOut, motion } from 'framer-motion';
import React, { FC, PropsWithChildren } from 'react';

import { Box, Typography } from '../../elements';
import { TimesSVG } from '../../icons';
import { TagElementProps, TagProps } from './tag.types';

const TagElement = stylin<TagElementProps>('button')(
  variant({
    scale: 'tags',
    property: 'variant',
  })
);

const MotionTag = motion(TagElement) as CustomDomComponent<TagProps>;

export const Tag: FC<PropsWithChildren<TagProps>> = ({
  onClose,
  children,
  PrefixIcon,
  size = 'large',
  ...props
}) => {
  return (
    <MotionTag
      {...(props.variant === 'filled' || props.variant === 'outline'
        ? {
            py:
              size === 'large' ? '2xs' : size === 'medium' ? '2xs' : '.125rem',
            px:
              size === 'large' ? '2xs' : size === 'medium' ? '2xs' : '.125rem',
          }
        : {})}
      whileTap={{
        scale: props.disabled ? 1 : 0.97,
        transition: { duration: 0.005, ease: easeInOut },
      }}
      whileHover={{
        scale: props.disabled ? 1 : 1.05,
        transition: { duration: 0.005, ease: easeInOut },
      }}
      data-testid="tag"
      {...props}
    >
      {PrefixIcon}
      <Typography
        as="p"
        variant="body"
        size={size}
        pr={!onClose ? '.625rem' : 'unset'}
        pl={!PrefixIcon ? '.625rem' : 'unset'}
        px={!PrefixIcon && !onClose ? '.625rem' : 'untset'}
      >
        {children}
      </Typography>
      {onClose && (
        <Box
          px="xs"
          py="2xs"
          display="flex"
          width="1.9rem"
          height="1.9rem"
          onClick={onClose}
          alignItems="center"
          justifyContent="center"
        >
          <TimesSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        </Box>
      )}
    </MotionTag>
  );
};

export * from './tag.types';
