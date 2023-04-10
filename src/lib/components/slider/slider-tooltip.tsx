import stylin, { variant } from '@stylin.js/react';
import React, { FC, PropsWithChildren } from 'react';

import { Box } from '../../elements';
import { colors } from '../../theme/light/colors';
import { fontSizes } from '../../theme/design-system';

type TooltipProps = {
  value: number;
  visible: boolean;
};

export const ToolTip: FC<PropsWithChildren<TooltipProps>> = ({
  value,
  visible,
}) => {
  if (!visible) return null;
  return (
    <Box
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
  );
};
