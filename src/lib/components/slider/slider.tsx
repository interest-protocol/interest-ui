import React, { FC, useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { useTheme } from '@emotion/react';

import { Box } from '../../elements';
import { Theme } from '../../theme';

type TooltipProps = {
  min?: number;
  max: number;
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
      disabled={disabled}
      values={values}
      step={step}
      min={min}
      max={max}
      onChange={(values) => setValues(values)}
      renderTrack={({ props, children }) => (
        <Box
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          alignItems="center"
          height="2.25rem"
          display="flex"
          width="100%"
          marginTop="1.25rem"
        >
          <Box
            ref={props.ref}
            height=".3125rem"
            width="100%"
            background={getTrackBackground({
              values,
              colors: [`${theme.colors.accent}`, `${theme.colors.accent}1F`],
              min: min || 0,
              max: max,
            })}
            alignSelf="center"
          >
            {children}
          </Box>
        </Box>
      )}
      renderThumb={({ props, isDragged }) => (
        <Box
          {...props}
          height="1.5rem"
          width="1.5rem"
          borderRadius="50%"
          backgroundColor={
            !disabled ? theme.colors.accent : theme.colors.disabled
          }
          cursor={disabled ? 'not-allowed !important' : 'pointer'}
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxShadow="0rem .125rem .375rem #AAA"
          nHover={
            !disabled && {
              boxShadow: `0 0 0 .625rem ${theme.colors.accent}1F`,
            }
          }
        >
          {isDragged && (
            <Box
              marginTop="-4.125rem"
              color="#fff"
              display="flex"
              height="1.875rem"
              minWidth="1.875rem"
              justifyContent="center"
              paddingTop=".25rem"
              fontSize=".875rem"
              clipPath="polygon(0 60%, 0 0, 100% 0, 100% 60%, 50% 100%)"
              borderRadius=".125rem"
              backgroundColor={theme.colors.accent}
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
