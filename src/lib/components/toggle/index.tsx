import stylin from '@stylin.js/react';
import { useMotionValue, useSpring } from 'framer-motion';
import { not } from 'ramda';
import React, {
  ChangeEventHandler,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

import { Theme, useTheme } from '../..';
import { Box, Motion, Typography } from '../../elements';
import {
  CheckedButtonElementProps,
  CheckedButtonProps,
  LabelElementProps,
} from './toggle.types';

const CheckedButtonElement = stylin<CheckedButtonElementProps>('input')();
const LabelElement = stylin<LabelElementProps>('label')();

const TRANSLATE_X = ['0.25rem', '1.3rem'];

export const ToggleButton: FC<PropsWithChildren<CheckedButtonProps>> = ({
  labels,
  onChange,
  disabled,
  activeIcon,
  inactiveIcon,
  defaultValue,
  ...props
}) => {
  const { colors } = useTheme() as Theme;
  const [toggler, setToggler] = useState(defaultValue || false);
  const ative = useMotionValue(TRANSLATE_X[Number(toggler)]);
  const translateX = useSpring(ative, { stiffness: 1000, damping: 100 });

  useEffect(() => {
    translateX.set(TRANSLATE_X[Number(toggler)]);
  }, [toggler]);

  const Icon = toggler ? activeIcon : inactiveIcon;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange?.(event);
    setToggler(not);
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
      <LabelElement
        ml="0.375rem"
        display="flex"
        borderRadius="full"
        position="relative"
        nActive={
          !disabled && {
            boxShadow: `0 0 0 .25rem ${
              colors[toggler ? 'primary' : 'onSurface']
            }29`,
          }
        }
      >
        <CheckedButtonElement
          display="none"
          type="checkbox"
          checked={toggler}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        <Box
          display="flex"
          width="2.75rem"
          height="1.7rem"
          cursor="pointer"
          borderRadius="full"
          alignItems="center"
          opacity={disabled ? 0.32 : 1}
          bg={
            disabled
              ? `${colors['onSurface']}3D`
              : !toggler
              ? `${colors['onSurface']}3D`
              : 'primary'
          }
          nHover={{
            backgroundImage: toggler
              ? 'linear-gradient(to bottom, #00000029, #00000029)'
              : 'linear-gradient(to bottom, #00000052, #00000052)',
          }}
          transition="background 300ms ease-in-out"
        >
          <Motion
            display="flex"
            width="1.25rem"
            height="1.25rem"
            borderRadius="full"
            alignItems="center"
            justifyContent="center"
            style={{ translateX }}
            opacity={disabled ? 0.7 : 1}
            bg={disabled ? 'surface' : 'onPrimary'}
            color={toggler ? 'primary' : 'onSurface'}
          >
            {Icon && (
              <Icon maxWidth=".875rem" maxHeight=".875rem" width="100%" />
            )}
          </Motion>
        </Box>
      </LabelElement>
      <Box display="flex" ml="xs" flexDirection="column">
        <Typography as="p" variant="body" size="large">
          {labels?.label}
        </Typography>
        <Typography
          as="label"
          size="small"
          variant="body"
          color={`${colors['onSurface']}B8`}
        >
          {labels?.supportingLabel}
        </Typography>
      </Box>
    </Box>
  );
};
