import React, { FC, PropsWithChildren } from 'react';

import { Box, Typography } from '../../elements';

type TooltipProps = {
  value: number;
  visible: boolean;
};

const SliderToolTip: FC<PropsWithChildren<TooltipProps>> = ({
  value,
  visible,
}) => {
  if (!visible) return null;

  return (
    <Box
      fontSize="xs"
      width="1.75rem"
      borderRadius="m"
      height="2.125rem"
      bottom="1.25rem"
      color="textAccent"
      textAlign="center"
      position="absolute"
      background="accent"
      clipPath="polygon(0% 0%, 100% 0%, 100% 60%, 50% 100%, 0% 60%)"
    >
      <Typography
        display="flex"
        width="1.75rem"
        height="1.75rem"
        alignItems="center"
        variant="extraSmall"
        justifyContent="center"
      >
        {value}
      </Typography>
    </Box>
  );
};

export default SliderToolTip;
