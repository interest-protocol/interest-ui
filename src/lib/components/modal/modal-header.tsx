import React from 'react';
import { FC } from 'react';

import { Box, Typography } from '../../elements';
import { TimesSVG } from '../../icons';
import { Button } from '../button';
import { Standardized, StandardizedWithCloseButton } from './modal.types';
import { hasCloseButton } from './modal.utils';

export { setAppElement } from 'react-modal';

export const ModalHeader: FC<StandardizedWithCloseButton | Standardized> = ({
  Icon,
  title,
  ...props
}) => {
  const hasButton = hasCloseButton(props);

  return (
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
          size="medium"
          variant="display"
          gridColumn="2/3"
          fontWeight="400"
          textAlign="center"
          fontFamily="Roboto Mono"
        >
          {title}
        </Typography>
      )}
      {hasButton && (
        <Box ml="auto" gridColumn="3/4">
          <Button
            role="button"
            isIcon
            variant="filled"
            color="onSurface"
            onClick={props.onClose}
          >
            <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ModalHeader;
