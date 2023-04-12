import { useTheme } from '@emotion/react';
import React, {
  FC,
  MouseEvent as ReactMouseEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
  useTransition,
} from 'react';

import { Box } from '../../elements';
import { Theme } from '../../theme';
import { SliderProps } from './slider.types';
import SliderToolTip from './slider-tooltip';

export const Slider: FC<SliderProps> = ({ min, max, value, onChange }) => {
  const { colors } = useTheme() as Theme;
  const [, startTransition] = useTransition();
  const [hover, setHover] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const [sliderWidth, setSliderWidth] = useState(0);

  useEffect(() => {
    startTransition(() => setSliderWidth(sliderRef.current?.offsetWidth ?? 0));
  }, [sliderRef]);

  const handleChange = (
    event: ReactMouseEvent<HTMLDivElement, MouseEvent> | MouseEvent
  ) => {
    const percent = event.clientX / sliderWidth;
    const newValue = Math.round(min + percent * (max - min));
    onChange(newValue);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleChange);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown: MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    window.addEventListener('mousemove', handleChange);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleActivateHover = () => setHover(true);
  const handleDeactivateHover = () => setHover(false);

  const percent = value > 100 ? 100 : ~~(((value - min) / (max - min)) * 100);

  return (
    <Box
      py="2xl"
      display="flex"
      ref={sliderRef}
      position="relative"
      alignItems="center"
      onClick={handleChange}
      onMouseEnter={handleActivateHover}
      onMouseLeave={handleDeactivateHover}
    >
      <Box
        width="100%"
        height="0.25rem"
        position="absolute"
        bg={`${colors.accent}1F`}
      />
      <Box flex="1" display="flex" position="relative" alignItems="center">
        <Box bg="accent" height="0.25rem" width={`${percent}%`} />
        <Box
          bg="accent"
          color="accent"
          display="flex"
          ref={handleRef}
          width="1.25rem"
          height="1.25rem"
          borderRadius="50%"
          position="absolute"
          justifyContent="center"
          transform="translateX(-50%)"
          onMouseDown={handleMouseDown}
          boxShadow="0 0.05rem 0.1rem #0004"
          left={`${percent}%`}
          nHover={{
            boxShadow: `0 0 0 0.625rem ${colors.accent}14`,
          }}
        >
          <SliderToolTip value={percent} visible={hover} />
        </Box>
      </Box>
    </Box>
  );
};

export * from './slider.types';
