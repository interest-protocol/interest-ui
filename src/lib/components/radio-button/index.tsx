import { useTheme } from '@emotion/react';
import stylin from '@stylin.js/react';
import React, { FC, PropsWithChildren, useMemo, useState } from 'react';

import { Box } from '../../elements';
import { RadioCircleSVG } from '../../icons';
import { Theme } from '../../theme';
import {
  RadioButtonElementProps,
  RadioButtonProps,
} from './radio-button.types';

export const RadioButton: FC<PropsWithChildren<RadioButtonProps>> = ({
  disabled,
  ...props
}) => {
  const theme = useTheme() as Theme;
  const [selector, setSelector] = useState(props.checked || false);

  const RadioButtonElement = stylin<RadioButtonElementProps>('input')();

  const RadioCircleColor = useMemo(() => {
    return selector ? theme.colors.accent : theme.colors.border;
  }, [selector, theme]);

  return (
    <Box display="flex" gap="1rem" flexWrap="wrap">
      <RadioButtonElement
        {...props}
        type="radio"
        display="none"
        checked={selector}
      />
      <Box
        width="1.25rem"
        height="1.25rem"
        color={disabled ? 'disabled' : RadioCircleColor}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="50%"
        transition="box-shadow .5s"
        nHover={{
          boxShadow: `${
            disabled ? 'disabled' : `${RadioCircleColor}14`
          } 0px 0px 0px 0.625rem`,
        }}
      >
        <RadioCircleSVG
          maxWidth="1.25rem"
          maxHeight="1.25rem"
          width="100%"
          height="100%"
          cursor="pointer"
          isChecked={selector}
          onClick={() => !disabled && setSelector(!selector)}
        />
      </Box>
    </Box>
  );
};

export * from './radio-button.types';
