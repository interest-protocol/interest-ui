import React from 'react';
import { FC } from 'react';

import { Box, Typography } from '../../elements';
import { TimesSVG } from '../../icons';
import { Button } from '../button';
import { StandardizedContent } from './modal.types';

export { setAppElement } from 'react-modal';

export const ModalHeader: FC<StandardizedContent> = ({
  Icon,
  title,
  hasCloseButton,
}) => (
  <Box
    px="l"
    height="4rem"
    display="grid"
    alignItems="center"
    gridTemplateColumns="3rem auto 3rem"
  >
    {Icon && <Box gridColumn="1/2">{Icon}</Box>}
    {title && (
      <Typography
        variant="title6"
        gridColumn="2/3"
        fontWeight="400"
        textAlign="center"
        fontFamily="Roboto Mono"
      >
        {title}
      </Typography>
    )}
    {hasCloseButton && (
      <Box gridColumn="3/4">
        <Button variant="icon" color="text">
          <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Button>
      </Box>
    )}
  </Box>
);

export default ModalHeader;
