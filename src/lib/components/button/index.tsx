import stylin, { variant } from '@stylin.js/react';
import { CustomDomComponent, motion } from 'framer-motion';
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';

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
  selected,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(selected || false);
  const { colors } = useTheme() as Theme;

  useEffect(() => {
    setIsFocused(Boolean(selected));
  }, [selected]);

  if (isIconButton(props))
    return (
      <MotionButton
        p="xs"
        width="1.5rem"
        height="1.5rem"
        alignItems="center"
        position="relative"
        display="inline-flex"
        borderColor={
          props.variant == 'outline' && isFocused ? 'primary' : 'unset'
        }
        color={
          (props.variant == 'outline' || props.variant == 'tonal') && isFocused
            ? 'primary'
            : props.variant == 'filled'
            ? 'onPrimary'
            : 'unset'
        }
        justifyContent="center"
        onBlur={() => setIsFocused(selected || false)}
        {...props}
        onClick={(e) => {
          !selected && setIsFocused(true);
          props.onClick?.(e);
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
          border={!isFocused ? 'unset' : '0.25rem solid'}
          left={props.variant == 'outline' ? '-11%' : '-10%'}
          width={props.variant == 'outline' ? '122%' : '120%'}
          height={props.variant == 'outline' ? '128%' : '120%'}
          borderColor={!isFocused ? 'transparent' : `${colors.primary}29`}
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
      borderColor={
        props.variant == 'outline' && isFocused ? 'primary' : 'unset'
      }
      color={
        (props.variant == 'outline' || props.variant == 'tonal') && isFocused
          ? 'primary'
          : props.variant == 'filled'
          ? 'onPrimary'
          : 'unset'
      }
      onBlur={() => setIsFocused(selected || false)}
      {...props}
      onClick={(e) => {
        !selected && setIsFocused(true);
        props.onClick?.(e);
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
        border={!isFocused ? 'unset' : '0.25rem solid'}
        left={props.variant == 'outline' ? '-4%' : '-3%'}
        height={props.variant == 'outline' ? '128%' : '120%'}
        width={props.variant == 'outline' ? '107.3%' : '106%'}
        borderColor={!isFocused ? 'transparent' : `${colors.primary}29`}
      />
    </MotionButton>
  );
};

export * from './button.types';
