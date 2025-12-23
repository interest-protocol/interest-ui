import { Button as StylinButton } from '@stylin.js/elements';
import React, { FC, PropsWithChildren } from 'react';

import { ButtonProps } from './button.types';

export const Outline: FC<PropsWithChildren<Omit<ButtonProps, 'variant'>>> = ({
  children,
  ...props
}) => {
  return (
    <StylinButton
      all="unset"
      gap="0.5rem"
      display="flex"
      cursor="pointer"
      color="#E2E2E6"
      fontFamily="Satoshi"
      p="0.75rem 1.5rem"
      alignItems="center"
      fontSize="0.875rem"
      borderRadius="0.75rem"
      border="1px solid"
      borderColor="#909094"
      justifyContent="space-between"
      transition="all 300ms ease-in-out"
      nHover={{
        color: '#B4C5FF',
        borderColor: '#B4C5FF',
        bg: '#B4C5FF14',
      }}
      {...props}
    >
      {children}
    </StylinButton>
  );
};
