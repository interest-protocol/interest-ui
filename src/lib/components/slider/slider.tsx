import { useTheme } from '@emotion/react';
import React, { FC, useState } from 'react';
import { getTrackBackground, Range } from 'react-range';

import { Box } from '../../elements';
import { Theme } from '../../theme';

type TooltipProps = {
  max: number;
  min?: number;
  step: number;
  initial: number;
  disabled?: boolean;
};

const SliderElement: FC<TooltipProps> = ({
  max,
  min,
  step,
  initial,
  disabled,
}) => {
  const theme = useTheme() as Theme;
  const [values, setValues] = useState([initial]);
  return (
    <Range
      max={max}
      min={min}
      step={step}
      values={values}
      disabled={disabled}
      onChange={(values) => setValues(values)}
      renderTrack={({ props, children }) => (
        <Box
          width="100%"
          display="flex"
          height="2.25rem"
          alignItems="center"
          marginTop="1.25rem"
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
        >
          <Box
            width="100%"
            ref={props.ref}
            height=".3125rem"
            alignSelf="center"
            background={getTrackBackground({
              values,
              colors: [`${theme.colors.primary}`, `${theme.colors.primary}1F`],
              min: min || 0,
              max: max,
            })}
          >
            {children}
          </Box>
        </Box>
      )}
      renderThumb={({ props, isDragged }) => (
        <Box
          {...props}
          display="flex"
          width="1.5rem"
          height="1.5rem"
          borderRadius="50%"
          alignItems="center"
          justifyContent="center"
          boxShadow="0rem .0625rem .375rem #0000007f"
          cursor={disabled ? 'not-allowed !important' : 'pointer'}
          nHover={
            !disabled && {
              boxShadow: `0 0 0 .625rem ${theme.colors.primary}1F`,
            }
          }
          backgroundColor={
            !disabled ? theme.colors.primary : theme.colors.disabled
          }
        >
          {isDragged && (
            <Box
              display="flex"
              height="1.875rem"
              fontSize=".875rem"
              paddingTop=".25rem"
              minWidth="1.875rem"
              marginTop="-4.125rem"
              borderRadius=".125rem"
              justifyContent="center"
              color={theme.colors.textBackground}
              clipPath="polygon(0 60%, 0 0, 100% 0, 100% 60%, 50% 100%)"
              backgroundColor={theme.colors.primary}
            >
              {values[0]}
            </Box>
          )}
        </Box>
      )}
    />
  );
};

export default SliderElement;
