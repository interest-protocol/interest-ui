import stylin, { variant } from '@stylin.js/react';
import { CustomDomComponent, easeInOut, motion } from 'framer-motion';
import React, { FC, PropsWithChildren } from 'react';

import { Box, Typography } from '../../elements';
import { TimesSVG } from '../../icons';
import { TagElementProps, TagProps } from './tag.types';
import { getSizePadding } from './tag.utils';

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
  onClick,
  ...props
}) => (
  <MotionTag
    {...(props.variant === 'filled' || props.variant === 'outline'
      ? {
          px: getSizePadding(size),
          py: getSizePadding(size),
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
    onClick={onClick}
    {...props}
    aria-labelledby="tag-title"
  >
    {PrefixIcon}
    <Typography
      as="p"
      size={size}
      variant="body"
      id="tag-title"
      pr={!onClose ? '0.625rem' : 'unset'}
      pl={!PrefixIcon ? '0.625rem' : 'unset'}
    >
      {children}
    </Typography>
    {onClose && (
      <Box
        display="flex"
        width="1.125rem"
        height="1.125rem"
        onClick={(e) => {
          onClose();
          e.stopPropagation();
        }}
        alignItems="center"
        justifyContent="center"
      >
        <TimesSVG maxWidth="1.125rem" maxHeight="1.125rem" width="100%" />
      </Box>
    )}
  </MotionTag>
);

export * from './tag.types';
