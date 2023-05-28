import stylin, { variant } from '@stylin.js/react';
import { CustomDomComponent, easeInOut, motion } from 'framer-motion';
import React, { FC, PropsWithChildren } from 'react';

import { Box } from '../../elements';
import { ButtonElementProps, ButtonProps } from './button.types';

const ButtonElement = stylin<ButtonElementProps>('button')(
  variant({
    scale: 'buttons',
    property: 'variant',
  })
);

const MotionButton = motion(ButtonElement) as CustomDomComponent<ButtonProps>;

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  PrefixIcon,
  SuffixIcon,
  size = 'medium',
  ...props
}) => (
  <MotionButton
    py={size === 'medium' ? ['m', 'xl'] : 'm'}
    px={size === 'medium' ? ['2xl', '3xl'] : 'xl'}
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
    {props.variant == 'icon' ? (
      <Box
        as="span"
        width="1.5rem"
        height="1.5rem"
        alignItems="center"
        display="inline-flex"
        justifyContent="center"
      >
        {children}
      </Box>
    ) : (
      <>
        {PrefixIcon}
        {children}
        {SuffixIcon}
      </>
    )}
  </MotionButton>
);

export * from './button.types';
