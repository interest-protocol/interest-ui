import stylin, { variant } from '@stylin.js/react';
import { CustomDomComponent, easeInOut, motion } from 'framer-motion';
import React, { FC, PropsWithChildren } from 'react';

import { Box } from '../../elements';
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
  hasCloseIcon,
  size = 'large',
  ...props
}) => {
  return (
    <MotionTag
      {...(props.variant === 'filled' || props.variant === 'outline'
        ? {
            py: size === 'large' ? '2xs' : size === 'medium' ? 'm' : 's',
            px: size === 'large' ? '2xs' : size === 'medium' ? 'm' : 's',
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
      {...props}
    >
      {PrefixIcon && (
        <Box
          p=".1875rem"
          width="2rem"
          height="2rem"
          display="flex"
          color="white"
          bg="onSurface"
          alignItems="center"
          borderRadius="full"
          justifyContent="center"
        >
          <PrefixIcon maxWidth="1.125rem" maxHeight="1.125rem" width="100%" />
        </Box>
      )}
      <Box
        pl={!PrefixIcon ? '.625rem' : 'unset'}
        pr={!hasCloseIcon ? '.625rem' : 'unset'}
        px={!PrefixIcon && !hasCloseIcon ? '.625rem' : 'untset'}
      >
        {children}
      </Box>
      {hasCloseIcon && (
        <Box
          px="xs"
          py="2xs"
          display="flex"
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
