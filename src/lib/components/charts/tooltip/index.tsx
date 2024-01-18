import React, { FC } from 'react';

import { Box, Typography } from '../../../elements';
import { CustomTooltipProps } from './tooltip.types';

const CustomTooltip: FC<CustomTooltipProps> = ({ active, payload }) => {
  if (!(active && payload && payload.length)) return null;

  return (
    <Box
      p="s"
      borderRadius="m"
      bg="inverseSurface"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.30)"
    >
      {payload.map(({ value, dataKey }) => (
        <Box key={`tooltip-${dataKey}`}>
          <Typography variant="body" size="small" color="inverseOnSurface">
            {value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CustomTooltip;
