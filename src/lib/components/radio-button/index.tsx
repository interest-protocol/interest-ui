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
  const LabelElement = stylin<LabelElementProps>('label')(`
    & span {
      &:after {
        content: '';
        position: absolute;
        top: calc(${size}/4);
        left: calc(${size}/4);
        width: calc(${size}/2);
        height: calc(${size}/2);
        border-radius: 100%;
        transform: scale(0);
        background: ${props.disabled ? colors.disabled : colors.accent};
        transition: all .2s ease;
        opacity: .08;
        pointer-events: none;
      }
    }
    &:hover, & > input[type="radio"]:active{
      & span:after {
        transform: scale(3.6);
      }
    }
    & > input[type="radio"]:checked + span{
      border-color: ${props.disabled ? colors.disabled : colors.accent};
      &:after{
        transform: scale(1);
        transition: all .2s cubic-bezier(.35,.9,.4,.9);
        opacity: 1;
      }
    }
  `);
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
        border="2px solid"
        borderColor="outline"
        borderRadius="100%"
      />
      {!hideLabel && label}
    </LabelElement>
  );
};

export * from './radio-button.types';
