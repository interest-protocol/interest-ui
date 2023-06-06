import { useTheme } from '@emotion/react';
import stylin from '@stylin.js/react';
import React, { FC, PropsWithChildren, useMemo, useState } from 'react';

import { Box, Motion } from '../../elements';
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
  const [variant, setVariant] = useState<'hover' | 'withoutHover'>(
    'withoutHover'
  );

  const RadioButtonElement = stylin<RadioButtonElementProps>('input')();

  const RadioCircleColor = useMemo(
    () => (selector ? theme.colors.primary : theme.colors.onSurface),
    [selector, theme]
  );

  const variants = {
    hover: {
      boxShadow: `${
        disabled ? 'disabled' : `${RadioCircleColor}14`
      } 0px 0px 0px 0.625rem`,
    },
    withoutHover: { boxShadow: 'unset' },
  };

  return (
    <Box display="flex" gap="1rem" flexWrap="wrap">
      <RadioButtonElement
        {...props}
        type="radio"
        display="none"
        checked={selector}
      />
      <Motion
        display="flex"
        width="1.25rem"
        height="1.25rem"
        animate={variant}
        borderRadius="50%"
        alignItems="center"
        variants={variants}
        justifyContent="center"
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setVariant('hover')}
        onMouseLeave={() => setVariant('withoutHover')}
        color={disabled ? 'onSurface' : RadioCircleColor}
      >
        <RadioCircleSVG
          width="100%"
          height="100%"
          cursor="pointer"
          maxWidth="1.25rem"
          maxHeight="1.25rem"
          isChecked={selector}
          onClick={() => !disabled && setSelector(!selector)}
        />
      </Motion>
    </Box>
  );
};

export * from './radio-button.types';
