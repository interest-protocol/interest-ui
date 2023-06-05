import { useTheme } from '@emotion/react';
import stylin from '@stylin.js/react';
import { useMotionValue, useSpring } from 'framer-motion';
import { isEmpty, not } from 'ramda';
import React, {
  ChangeEventHandler,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

import { Box, Motion } from '../../elements';
import { Theme } from '../../theme';
import {
  CheckedButtonElementProps,
  CheckedButtonProps,
  LabelElementProps,
} from './switch.types';
import { getBackground, getLabel } from './switch.utils';

const CheckedButtonElement = stylin<CheckedButtonElementProps>('input')();
const LabelElement = stylin<LabelElementProps>('label')();

const WIDTH = {
  small: '2.3rem',
  medium: '2.6rem',
};

const HEIGHT = {
  small: '1.25rem',
  medium: '1.7rem',
};

const SIZES = {
  small: '1rem',
  medium: '1.2rem',
};

const TRANSLATE_X = {
  small: ['0.1rem', '1.2rem'],
  medium: ['0.3rem', '1.15rem'],
};

export const SwitchButton: FC<PropsWithChildren<CheckedButtonProps>> = ({
  labels,
  onChange,
  disabled,
  defaultValue,
  size = 'small',
  ...props
}) => {
  const theme = useTheme() as Theme;
  const [switcher, setSwitcher] = useState(defaultValue || false);
  const ative = useMotionValue(TRANSLATE_X[size][Number(switcher)]);
  const translateX = useSpring(ative, { stiffness: 1000, damping: 100 });

  useEffect(() => {
    translateX.set(TRANSLATE_X[size][Number(switcher)]);
  }, [switcher]);

  const selectedColor = switcher ? 'primary.onPrimary' : 'outline';

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange?.(event);
    setSwitcher(not);
  };

  return (
    <Box
      fontSize="s"
      display="flex"
      flexWrap="wrap"
      fontWeight="300"
      color="onSurface"
      alignItems="center"
      textTransform="capitalize"
    >
      {labels && !isEmpty(labels) && getLabel(labels, switcher)}
      <LabelElement ml="0.375rem" display="flex" position="relative">
        <CheckedButtonElement
          display="none"
          type="checkbox"
          checked={switcher}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        <Box
          display="flex"
          cursor="pointer"
          alignItems="center"
          borderRadius="full"
          width={WIDTH[size]}
          height={HEIGHT[size]}
          bg={getBackground(switcher, theme)}
          transition="background 300ms ease-in-out"
        >
          <Motion
            bg={selectedColor}
            borderRadius="50%"
            width={SIZES[size]}
            height={SIZES[size]}
            style={{ translateX }}
            opacity={disabled ? 0.7 : 1}
          />
        </Box>
      </LabelElement>
    </Box>
  );
};
