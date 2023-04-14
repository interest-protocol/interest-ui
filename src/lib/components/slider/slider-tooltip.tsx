import React, { FC } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { useTheme } from '@emotion/react';

import { Box } from '../../elements';
import { Theme } from '../../theme';

type TooltipProps = {
  min: number;
  max: number;
  step: number;
};

const SliderToolTip: FC<TooltipProps> = ({ max, min, step }) => {
  const theme = useTheme() as Theme;
  const [values, setValues] = React.useState([0]);
  return (
    <Range
      values={values}
      step={step}
      min={min}
      max={max}
      onChange={(values) => setValues(values)}
      renderTrack={({ props, children }) => (
        <Box
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          height="2.25rem"
          display="flex"
          width="100%"
        >
          <Box
            ref={props.ref}
            height=".3125rem"
            width="100%"
            background={getTrackBackground({
              values,
              colors: [`${theme.colors.accent}`, `${theme.colors.accent}1F`],
              min: min,
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
          height="2.625rem"
          width="2.625rem"
          borderRadius="50%"
          backgroundColor={theme.colors.accent}
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxShadow="0rem .125rem .375rem #AAA"
        >
          <Box
            position="absolute"
            top="-1.875rem"
            color="#fff"
            fontWeight="bold"
            fontSize=".875rem"
            fontFamily="Arial,Helvetica Neue,Helvetica,sans-serif"
            padding=".25rem"
            clipPath="polygon(0 60%, 0 0, 100% 0, 100% 60%, 50% 100%)"
            borderRadius=".25rem"
            backgroundColor={theme.colors.accent}
          >
            {values[0].toFixed(1)}
          </Box>
        </Box>
      )}
    />
  );
};

export default SliderToolTip;
