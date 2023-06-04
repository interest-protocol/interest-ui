import { useTheme } from '@emotion/react';
import React, { FC, useState } from 'react';
import { getTrackBackground, Range } from 'react-range';

import { Box } from '../../elements';
import { Theme } from '../../theme';
import { SliderProps } from './slider.types';

const SliderElement: FC<SliderProps> = ({
  min = 0,
  step = 1,
  onChange,
  max = 100,
  initial = 0,
  disabled = false,
}) => {
  const theme = useTheme() as Theme;
  const [value, setValue] = useState(initial);

  const handleChange = ([innerValue]: Array<number>) => {
    setValue(innerValue);
    onChange?.(innerValue);
  };

  return (
    <Range
      max={max}
      min={min}
      step={step}
      values={[value]}
      disabled={disabled}
      onChange={handleChange}
      renderTrack={({ props, children }) => (
        <Box
          width="100%"
          display="flex"
          height="2.25rem"
          marginTop="1.5rem"
          alignItems="center"
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
        >
          <Box
            width="100%"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            ref={props.ref}
            height=".25rem"
            alignSelf="center"
            background={getTrackBackground({
              values: [value],
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
          width="1.25rem"
          height="1.25rem"
          borderRadius="50%"
          alignItems="center"
          justifyContent="center"
          boxShadow="-0.0313rem .0313rem .125rem .0125rem #0000007f"
          cursor={disabled ? 'not-allowed !important' : 'pointer'}
          nHover={
            !disabled && {
              boxShadow: `0 0 0 .625rem ${theme.colors.primary}1F, -0.0313rem .0313rem .125rem .0125rem #0000007f`,
            }
          }
          backgroundColor={
            !disabled ? theme.colors.primary : theme.colors.disabled
          }
        >
          {isDragged && (
            <Box
              marginTop="-55px"
              display="flex"
              height="2.125rem"
              fontSize=".875rem"
              paddingBottom=".25rem"
              paddingTop=".25rem"
              minWidth="1.75rem"
              color="textBackground"
              justifyContent="center"
              backgroundColor="primary"
              clipPath="path('M0 2C0 0.89543 0.895431 0 2 0H26C27.1046 0 28 0.89543 28 2V22.5C28 23.1295 27.7036 23.7223 27.2 24.1L14 34L0.8 24.1C0.296388 23.7223 0 23.1295 0 22.5V2Z')"
            >
              {value}
            </Box>
          )}
        </Box>
      )}
    />
  );
};

export const Slider: FC<SliderProps> = (props) => (
  <Box position="relative">
    <SliderElement {...props} />
  </Box>
);

export * from './slider.types';
