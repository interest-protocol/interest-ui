import { useTheme } from '@emotion/react';
import React, { FC, useState } from 'react';
import { getTrackBackground, Range } from 'react-range';
import { v4 } from 'uuid';

import { Box } from '../../elements';
import { Theme } from '../../theme';
import { RangeType } from './range-type';
import { SliderProps } from './slider.types';
import { ThumbWrapper } from './thumb-wrapper';

const SliderElement: FC<SliderProps> = ({
  min = 0,
  step = 1,
  onChange,
  max = 100,
  initial = 0,
  withTooltip,
  disabled = false,
  bottomValue = false,
  showZeroValue = false,
}) => {
  const { colors } = useTheme() as Theme;
  const [values, setValues] = useState(
    Array.isArray(initial) ? initial : [initial]
  );

  const handleChange = (innerValue: Array<number>) => {
    setValues(innerValue);
    onChange?.(innerValue[0]);
  };

  return (
    <Range
      max={max}
      min={min}
      step={step}
      values={values}
      disabled={disabled}
      allowOverlap
      onChange={handleChange}
      renderTrack={({ props, children }) => (
        <Box
          data-testid="slider"
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
              max: max,
              min: min || 0,
              values: values,
              colors:
                values.length == 1
                  ? [`${colors.primary}`, 'rgba(0, 0, 0, 0.08)']
                  : [
                      'rgba(0, 0, 0, 0.08)',
                      `${colors.primary}`,
                      'rgba(0, 0, 0, 0.08)',
                    ],
            })}
          >
            {children}
          </Box>
        </Box>
      )}
      renderThumb={({ props }) => (
        <ThumbWrapper disabled={disabled} thumbDetails={props} key={v4()}>
          <RangeType
            disabled={disabled}
            value={values[props.key]}
            withTooltip={withTooltip}
            bottomValue={bottomValue}
            showZeroValue={showZeroValue}
          />
        </ThumbWrapper>
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
