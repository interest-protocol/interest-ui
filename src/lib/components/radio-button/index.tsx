import { useTheme } from '@emotion/react';
import stylin from '@stylin.js/react';
import React, { FC, PropsWithChildren } from 'react';
import { v4 } from 'uuid';

import { Box, Typography } from '../../elements';
import { Theme } from '../../theme';
import {
  LabelElementProps,
  RadioButtonElementProps,
  RadioButtonProps,
} from './radio-button.types';

export const RadioButton: FC<PropsWithChildren<RadioButtonProps>> = ({
  size,
  hideLabel,
  options,
  ...props
}) => {
  const { colors } = useTheme() as Theme;
  const RadioButtonElement = stylin<RadioButtonElementProps>('input')();
  const LabelElement = stylin<LabelElementProps>('label')();
  return (
    <Box display="flex" gap="1rem" flexWrap="wrap">
      {options.map((option) => (
        <LabelElement
          key={v4()}
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          fontSize={size}
          position="relative"
          cursor="pointer"
          textTransform="capitalize"
          color={props.disabled ? 'disabled' : 'textDisabled'}
          nHover={{
            'input[type="radio"]:checked ~ span:before': {
              display: 'block',
              backgroundColor: props.disabled ? colors.disabled : colors.accent,
              opacity: 0.1,
            },
            'input[type="radio"] ~ span:before': {
              display: 'block',
              backgroundColor: colors.disabled,
              opacity: 0.2,
            },
          }}
        >
          <RadioButtonElement
            {...props}
            type="radio"
            display="none"
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
            width={`calc(${size}/1.7)`}
            height={`calc(${size}/1.7)`}
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
              width: `calc(${size}/2.85)`,
              height: `calc(${size}/2.85)`,
              borderRadius: '50%',
              top: `calc(${size}/8.85)`,
              left: `calc(${size}/8.85)`,
            }}
            nBefore={{
              content: '""',
              position: 'absolute',
              display: 'none',
              opacity: props.disabled ? 0.8 : 1,
              width: `calc(${size}*1.3)`,
              height: `calc(${size}*1.3)`,
              borderRadius: '50%',
              top: `calc(-${size}/2.85)`,
              left: `calc(-${size}/2.85)`,
            }}
          />
          {!hideLabel && option}
        </LabelElement>
      ))}
    </Box>
  );
};

export * from './radio-button.types';
