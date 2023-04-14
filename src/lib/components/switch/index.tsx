import { useTheme } from '@emotion/react';
import stylin from '@stylin.js/react';
import { useMotionValue, useSpring } from 'framer-motion';
import { isEmpty, not } from 'ramda';
import React, {
  ChangeEventHandler,
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Box, Motion } from '../../elements';
import { Colors, Theme } from '../../theme';
import {
  CheckedButtonElementProps,
  CheckedButtonProps,
  LabelElementProps,
} from './switch.types';
import { getBackground, getLabel } from './switch.utils';

const CheckedButtonElement = stylin<CheckedButtonElementProps>('input')();
const LabelElement = stylin<LabelElementProps>('label')();

export const SwitchButton: FC<PropsWithChildren<CheckedButtonProps>> = ({
  labels,
  onChange,
  disabled,
  defaultValue,
  ...props
}) => {
  const { dark } = useTheme() as Theme;
  const [switcher, setSwitcher] = useState(defaultValue || false);
  const ative = useMotionValue(switcher ? '1rem' : '0rem');
  const translateX = useSpring(ative, { stiffness: 1000, damping: 100 });

  useEffect(() => {
    translateX.set(switcher ? '1rem' : '0rem');
  }, [switcher]);

  const selectedColor: Colors = useMemo(() => {
    if (dark) {
      if (switcher) return 'secondary';

      return 'textSoft';
    }

    if (switcher) return 'textAccent';

    return 'background';
  }, [switcher, dark]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange?.(event);
    setSwitcher(not);
  };

  return (
    <Box
      fontSize="s"
      display="flex"
      flexWrap="wrap"
      color="textSoft"
      fontWeight="300"
      alignItems="center"
      textTransform="capitalize"
    >
      {!isEmpty(labels) && getLabel(labels, switcher)}
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
          p="3xs"
          width="2rem"
          display="flex"
          cursor="pointer"
          alignItems="center"
          borderRadius="full"
          transition="background 300ms ease-in-out"
          bg={getBackground(switcher, dark)}
        >
          <Motion
            width="1rem"
            height="1rem"
            borderRadius="50%"
            style={{ translateX }}
            background={selectedColor}
            opacity={disabled ? 0.7 : 1}
          />
        </Box>
      </LabelElement>
    </Box>
  );
};
