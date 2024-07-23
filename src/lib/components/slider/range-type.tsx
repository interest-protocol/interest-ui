import React, { FC } from 'react';

import { Box, Typography } from '../../elements';
import { TooltipWrapper } from '../tooltip';
import { RangeTypeProps } from './slider.types';

export const RangeType: FC<RangeTypeProps> = ({
  value,
  disabled,
  bottomValue,
  withoutTooltip,
  showZeroValue,
}) => {
  return (
    <>
      {withoutTooltip ? (
        <TooltipWrapper
          bg="lowestContainer"
          tooltipPosition={bottomValue ? 'bottom' : 'top'}
          tooltipContent={
            <Typography variant="body" size="medium" px="xs">
              {value}%
            </Typography>
          }
          boxShadow="0px 2px 4px -2px rgba(13, 16, 23, 0.04), 0px 4px 8px -2px rgba(13, 16, 23, 0.12)"
          bottom={bottomValue ? '-0.5rem' : 'unset'}
          top={!bottomValue ? '-0.5rem' : 'unset'}
        >
          <Box
            display="flex"
            width="1.25rem"
            height="1.25rem"
            marginTop="-0px"
            minWidth="1.25rem"
            borderRadius="50%"
            justifyContent="center"
          />
        </TooltipWrapper>
      ) : (
        <Box
          display="flex"
          marginTop={bottomValue ? '50px' : '-50px'}
          minWidth="2.75rem"
          justifyContent="center"
          role="tooltip"
        >
          <Typography
            size="large"
            variant="label"
            color={!disabled ? 'onSurface' : '#C8C8C9'}
          >
            {value == 0 ? showZeroValue && `${value}%` : `${value}%`}
          </Typography>
        </Box>
      )}
    </>
  );
};
