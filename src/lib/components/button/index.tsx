import stylin, { variant } from '@stylin.js/react';
import { CustomDomComponent, motion } from 'framer-motion';
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';

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
        role="button"
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
      </MotionButton>
    );

  const { SuffixIcon, PrefixIcon } = props as NoIconButton;

  return (
    <MotionButton
      py="s"
      role="button"
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
      {...(isFocused && {
        boxShadow: `0 0 0 0.25rem ${colors.primary}29`,
      })}
    >
      {PrefixIcon}
      {children}
      {SuffixIcon}
    </MotionButton>
  );
};

export * from './button.types';
