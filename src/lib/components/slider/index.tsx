import stylin, { variant } from '@stylin.js/react';
import React, { FC, PropsWithChildren } from 'react';

import { Box } from '../../elements';
import { colors } from '../../theme/light/colors';
import { fontSizes } from '../../theme/design-system';
import { InputElementProps } from './slider.types';

export const Slider: FC = () => {
  const [value, setValue] = React.useState(50);

  const handleValueChange = (event: any) => {
    setValue(event.target.value);
  };

  const InputElement = stylin<InputElementProps>('input')();

  return (
    <Box position={'relative'} width={'fit-content'}>
      <Box
        content='""'
        position="absolute"
        background={colors.accent}
        top={0}
        bottom={30}
        fontSize={fontSizes.xs}
        color={'white'}
        left={value + '%'}
        transform={'translateX(-' + value + '%)'}
        width={28}
        height={25}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={2}
        nAfter={{
          content: '""',
          position: 'absolute',
          background: `${colors.accent}`,
          width: '100%',
          height: '100%',
          top: '38.5%',
          left: '50%',
          clipPath: 'polygon(50% 100%,3% 60%,97% 60%)',
          transformOrigin: '0',
          transform: 'translateX(-50%)',
        }}
      >
        {value}
      </Box>
      <InputElement
        type="range"
        marginTop={40}
        onChange={handleValueChange}
        defaultValue={value}
        step={25}
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
          ':after': {
            content: '""',
            position: 'absolute',
            // backgroundColor: `rgba(${parseInt(
            //   colors.accent.substring(1, 3),
            //   16
            // )}, ${parseInt(colors.accent.substring(3, 5), 16)}, ${parseInt(
            //   colors.accent.substring(5, 7),
            //   16
            // )}, 0.8)`,
            backgroundColor: 'black',
            width: 40,
            height: 40,
            borderRadius: '50%',
            top: '50%',
            left: '50%',
          },
        }}
      />
    </Box>
  );
};

export * from './slider.types';
