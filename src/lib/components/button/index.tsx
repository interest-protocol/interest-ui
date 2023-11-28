import stylin, { variant } from '@stylin.js/react';
import { CustomDomComponent, motion } from 'framer-motion';
import React, { FC, PropsWithChildren, useState } from 'react';

import { Box } from '../../elements';
import { Theme, useTheme } from '../../theme';
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
  const [isFocused, setIsFocused] = useState(false);
  const { colors } = useTheme() as Theme;

  if (isIconButton(props))
    return (
      <MotionButton
        p="xs"
        width="1.5rem"
        height="1.5rem"
        alignItems="center"
        position="relative"
        display="inline-flex"
        justifyContent="center"
        onBlur={() => setIsFocused(false)}
        {...props}
        onClick={(e) => {
          setIsFocused(true);
          props.onClick && props.onClick(e);
        }}
      >
        {children}
        <Box
          p="s"
          nActive={
            props.disabled
              ? {}
              : {
                  border: '0.25rem solid',
                  borderColor: `${colors.primary}29`,
                }
          }
          position="absolute"
          borderRadius="full"
          transition="all 300ms ease-in-out"
          border={isFocused ? '0.25rem solid' : 'unset'}
          left={props.variant == 'outline' ? '-11%' : '-10%'}
          width={props.variant == 'outline' ? '122%' : '120%'}
          height={props.variant == 'outline' ? '128%' : '120%'}
          borderColor={isFocused ? `${colors.primary}29` : 'transparent'}
        />
      </MotionButton>
    );

  const { SuffixIcon, PrefixIcon } = props as NoIconButton;

  return (
    <MotionButton
      py="xs"
      position="relative"
      pr={SuffixIcon ? 'm' : 'xl'}
      pl={PrefixIcon ? 'm' : 'xl'}
      onBlur={() => setIsFocused(false)}
      {...props}
      onClick={(e) => {
        setIsFocused(true);
        props.onClick && props.onClick(e);
      }}
    >
      {PrefixIcon}
      {children}
      {SuffixIcon}
      <Box
        p="s"
        nActive={
          props.disabled
            ? {}
            : {
                border: '0.25rem solid',
                borderColor: `${colors.primary}29`,
              }
        }
        position="absolute"
        borderRadius="full"
        transition="all 300ms ease-in-out"
        border={isFocused ? '0.25rem solid' : 'unset'}
        left={props.variant == 'outline' ? '-4%' : '-3%'}
        height={props.variant == 'outline' ? '128%' : '120%'}
        width={props.variant == 'outline' ? '107.7%' : '106%'}
        borderColor={isFocused ? `${colors.primary}29` : 'transparent'}
      />
    </MotionButton>
  );
};

export * from './button.types';
