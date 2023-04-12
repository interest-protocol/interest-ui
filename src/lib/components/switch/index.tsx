import { useTheme } from '@emotion/react';
import stylin from '@stylin.js/react';
import React, { FC, PropsWithChildren, useState } from 'react';

import { Box, Typography } from '../../elements';
import { Theme } from '../../theme';
import {
  CheckedButtonElementProps,
  CheckedButtonProps,
  LabelElementProps,
} from './switch.types';

export const SwitchButton: FC<PropsWithChildren<CheckedButtonProps>> = ({
  size,
  hideLabel,
  options,
  initialValue,
  ...props
}) => {
  const [switcher, setSwitcher] = useState(initialValue || false);

  const { colors, dark } = useTheme() as Theme;
  const CheckedButtonElement = stylin<CheckedButtonElementProps>('input')();
  const LabelElement = stylin<LabelElementProps>('label')();

  return (
    <Box
      fontSize={`calc(${size}/2)`}
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      textTransform="capitalize"
      color="foreground"
      fontWeight="300"
    >
      {!hideLabel && options[switcher ? 1 : 0]}
      <LabelElement
        display="flex"
        position="relative"
        width={size}
        height={`calc(${size}/2)`}
        ml="5px"
      >
        <CheckedButtonElement
          {...props}
          type="checkbox"
          display="none"
          nChecked={{
            '~ span': {
              backgroundColor: colors.accent,
            },
            '~ span:before': {
              transform: `translateX(115%)`,
              backgroundColor: dark ? colors['accentBackground'] : 'background',
            },
          }}
          checked={switcher}
          onChange={() => setSwitcher(!switcher)}
        />
        <Typography
          variant="medium"
          as="span"
          position="absolute"
          cursor="pointer"
          top="0"
          left="0"
          right="0"
          bottom="0"
          backgroundColor={dark ? 'background' : 'foreground'}
          transition="transform .4s"
          borderRadius={`calc(${size}/2.3)`}
          nBefore={{
            content: '""',
            position: 'absolute',
            width: `calc(${size}/2.3)`,
            height: `calc(${size}/2.3)`,
            borderRadius: '50%',
            bottom: `calc(${size}/30)`,
            left: `calc(${size}/30)`,
            bg: dark ? 'foreground' : 'background',
            transition: 'transform .4s',
            opacity: props.disabled ? 0.7 : 1,
          }}
        />
      </LabelElement>
    </Box>
  );
};
