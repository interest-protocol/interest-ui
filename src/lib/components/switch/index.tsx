import { useTheme } from '@emotion/react';
import stylin from '@stylin.js/react';
import React, { FC, PropsWithChildren, useMemo, useState } from 'react';

import { Box, Typography } from '../../elements';
import { Theme } from '../../theme';
import {
  CheckedButtonElementProps,
  CheckedButtonProps,
  LabelElementProps,
} from './switch.types';

export const SwitchButton: FC<PropsWithChildren<CheckedButtonProps>> = ({
  hideLabel,
  labels,
  defaultValue,
  ...props
}) => {
  const [switcher, setSwitcher] = useState(defaultValue || false);

  const theme = useTheme() as Theme;
  const CheckedButtonElement = stylin<CheckedButtonElementProps>('input')();
  const LabelElement = stylin<LabelElementProps>('label')();

  const selectedColor = useMemo(() => {
    return theme.dark
      ? switcher
        ? theme.colors.accentBackground
        : theme.colors.textSoft
      : switcher
      ? theme.colors.textAccent
      : theme.colors.background;
  }, [switcher, theme.dark]);

  const backgroundColor = useMemo(() => {
    return switcher
      ? theme.colors.accent
      : theme.dark
      ? theme.colors.background
      : theme.colors.textSoft;
  }, [switcher, theme.dark]);

  return (
    <Box
      fontSize="0.875rem"
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      textTransform="capitalize"
      color="textSoft"
      fontWeight="300"
    >
      {!hideLabel && labels[switcher ? 1 : 0]}
      <LabelElement
        display="flex"
        position="relative"
        width="2.125rem"
        height="1.063rem"
        ml="0.375rem"
      >
        <CheckedButtonElement
          {...props}
          type="checkbox"
          display="none"
          nChecked={{
            '~ span': {
              backgroundColor: theme.colors.accent,
            },
            '~ span:before': {
              transform: `translateX(115%)`,
              backgroundColor: selectedColor,
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
          width="2.125rem"
          height="1.063rem"
          bottom="0"
          backgroundColor={backgroundColor}
          borderRadius="6.25rem"
          nBefore={{
            content: '""',
            position: 'absolute',
            width: '0.938rem',
            height: '0.938rem',
            borderRadius: '1.438rem',
            bottom: '0.063rem',
            left: '0.063rem',
            backgroundColor: selectedColor,
            opacity: props.disabled ? 0.7 : 1,
          }}
        />
      </LabelElement>
    </Box>
  );
};
