import stylin, { variant } from '@stylin.js/react';
import { CustomDomComponent, easeInOut, motion } from 'framer-motion';
import React, { FC, PropsWithChildren } from 'react';

import { Box } from '../../elements';
import { ButtonElementProps, ButtonProps, NoIconButton } from './button.types';
import { isIconButton } from './button.utils';

const ButtonElement = stylin<ButtonElementProps>('button')(
  variant({
    scale: 'buttons',
    property: 'variant',
  })
);

const MotionButton = motion(ButtonElement) as CustomDomComponent<ButtonProps>;

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  if (isIconButton(props))
    return (
      <MotionButton
        p="xs"
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
      </MotionButton>
    );

  const { SuffixIcon, PrefixIcon } = props as NoIconButton;

  return (
    <MotionButton
      py="xs"
      pr={SuffixIcon ? 'm' : 'xl'}
      pl={PrefixIcon ? 'm' : 'xl'}
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
      <>
        {PrefixIcon}
        {children}
        {SuffixIcon}
      </>
    </MotionButton>
  );
};

export * from './button.types';
