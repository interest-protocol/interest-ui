import stylin, { variant } from '@stylin.js/react';
import React, { FC, PropsWithChildren } from 'react';

import { Box } from '../../elements';
import { ButtonElementProps, ButtonProps } from './button.types';

const ButtonElement = stylin<ButtonElementProps>('button')(
  variant({
    scale: 'buttons',
    property: 'variant',
  })
);

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  PrefixIcon,
  SuffixIcon,
  children,
  ...props
}) => (
  <ButtonElement {...props}>
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
  </ButtonElement>
);

export * from './button.types';
