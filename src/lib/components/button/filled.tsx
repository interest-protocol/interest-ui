import { Button as StylinButton } from '@stylin.js/elements';
import React, { FC, PropsWithChildren } from 'react';

import { ButtonProps } from './button.types';

export const Filled: FC<PropsWithChildren<Omit<ButtonProps, 'variant'>>> = ({
  children,
  ...props
}) => {
  return (
    <StylinButton
      all="unset"
      px="1.5rem"
      gap="0.5rem"
      py="0.75rem"
      display="flex"
      cursor="pointer"
      fontWeight="500"
      color="#002A78"
      fontFamily="Satoshi"
      alignItems="center"
      fontSize="0.875rem"
      position="relative"
      borderColor="unset"
      borderRadius="0.75rem"
      justifyContent="center"
      transition="all 300ms ease-in-out"
      boxShadow="0px 0px 0px 1px #9CA3AF1A"
      background="#B4C5FF"
      nHover={{
        background: `linear-gradient(0deg, #FFF2, #FFF2), #B4C5FF`,
      }}
      nDisabled={{
        ':hover': {
          background: '#9CA3AF1A',
        },
        background: '#9CA3AF1A',
        color: '#9CA3AF',
        cursor: 'not-allowed',
      }}
      {...props}
    >
      {children}
    </StylinButton>
  );
};
