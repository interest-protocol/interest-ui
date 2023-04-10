import { useTheme } from '@emotion/react';
import stylin from '@stylin.js/react';
import React, { FC, PropsWithChildren } from 'react';

import { Typography } from '../../elements';
import { Theme } from '../../theme';
import {
  LabelElementProps,
  RadioButtonElementProps,
  RadioButtonProps,
} from './radio-button.types';

export const RadioButton: FC<PropsWithChildren<RadioButtonProps>> = ({
  name,
  label,
  size,
  hideLabel,
  ...props
}) => {
  const { colors } = useTheme() as Theme;
  const RadioButtonElement = stylin<RadioButtonElementProps>('input')();
  const LabelElement = stylin<LabelElementProps>('label')();
  return (
    <LabelElement
      {...props}
      display="flex"
      alignItems="center"
      fontSize={size}
      position="relative"
      cursor="pointer"
      color={props.disabled ? 'disabled' : 'textDisabled'}
    >
      <RadioButtonElement
        type="radio"
        name={name}
        display="none"
        disabled={props.disabled || false}
        checked={props.checked}
        nChecked={{
          '~ span': {
            borderColor: props.disabled ? colors.disabled : colors.accent,
          },
          '~ span:after': {
            display: 'block',
          },
        }}
      />
      <Typography
        variant="medium"
        as="span"
        position="relative"
        display="block"
        float="left"
        mr="10px"
        width={size}
        height={size}
        border={`calc(${size}/12) solid`}
        borderColor="disabled"
        opacity={props.disabled ? 0.8 : 1}
        borderRadius="100%"
        nAfter={{
          content: '""',
          position: 'absolute',
          bg: props.disabled ? 'disabled' : 'accent',
          display: 'none',
          opacity: props.disabled ? 0.8 : 1,
          width: `calc(${size}/2)`,
          height: `calc(${size}/2)`,
          borderRadius: '50%',
          top: `calc(${size}/4)`,
          left: `calc(${size}/4)`,
        }}
      />
      {!hideLabel && label}
    </LabelElement>
  );
};

export * from './radio-button.types';
