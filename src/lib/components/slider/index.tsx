import stylin, { StylinComponent, variant } from '@stylin.js/react';
import React, { FC, PropsWithChildren } from 'react';

import { Box } from '../../elements';
import { colors } from '../../theme/light/colors';
import { fontSizes } from '../../theme/design-system';
import { InputElementProps } from './slider.types';
import { ToolTip } from './slider-tooltip';

export const Slider: FC = React.forwardRef((_, ref) => {
  const [toggle, setToggle] = React.useState(false);
  const InputElement = stylin<InputElementProps>('input')();

  return (
    <Box position={'relative'} width={'fit-content'}>
      <ToolTip value={ref.current?.value} visible={toggle} />
      <InputElement
        ref={ref}
        type="range"
        onMouseEnter={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}
        max={100}
        min={0}
        marginTop={40}
        step={1}
        appearance={'none'}
        height={4}
        width={200}
        position={'relative'}
        background={`linear-gradient(90deg, ${
          colors.accent
        } ${value}%, rgba(${parseInt(
          colors.accent.substring(1, 3),
          16
        )}, ${parseInt(colors.accent.substring(3, 5), 16)}, ${parseInt(
          colors.accent.substring(5, 7),
          16
        )}, 0.12) 0%)`}
        nWebkitSliderThumb={{
          appearance: 'none',
          width: 20,
          height: 20,
          position: 'relative',
          borderRadius: '50%',
          background: colors.accent,
          boxShadow:
            '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px rgba(0, 0, 0, 0.15);',
          cursor: 'pointer',
        }}
      />
    </Box>
  );
});

export * from './slider.types';
