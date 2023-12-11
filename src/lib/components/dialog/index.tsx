import React, { FC } from 'react';

import { Box, Typography } from '../../elements';
import { CheckSVG, ExclamationSVG, TimesSVG, WarningSVG } from '../../icons';
import { SVGProps } from '../../icons/icons.types';
import { Button } from '../button';
import { Modal } from '../modal';
import { ProgressIndicator } from '../progress-indicator';
import { DialogProps } from './dialog.types';
import { COLOR_MAP } from './dialog.utils';

const STATUS_ICON: Record<string, FC<SVGProps>> = {
  error: WarningSVG,
  warning: ExclamationSVG,
  info: ExclamationSVG,
  success: CheckSVG,
};

export const Dialog: FC<DialogProps> = ({
  status,
  title,
  isOpen,
  message,
  onClose,
  secondaryButton,
  primaryButton,
}) => {
  const Icon = STATUS_ICON[status];
  return (
    <Modal custom isOpen={isOpen}>
      <Box
        p="xl"
        borderRadius="m"
        width="25rem"
        maxWidth="90%"
        alignItems="center"
        display="inline-flex"
        flexDirection="column"
        justifyContent="center"
        boxShadow="dropShadow.2xl"
        backgroundColor="lowestContainer"
      >
        <Box
          display="flex"
          minWidth="100%"
          position="relative"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            color={COLOR_MAP[status]}
            flex="1"
            textAlign="center"
            variant="title"
            size="large"
          >
            {title}
          </Typography>
          {!!onClose && (
            <Box top="0" right="0" position="absolute" width="fit-content">
              <TimesSVG
                onClick={onClose}
                cursor="pointer"
                maxWidth="1.5rem"
                maxHeight="1.5rem"
                width="100%"
              />
            </Box>
          )}
        </Box>
        <Box
          display="flex"
          maxWidth="22rem"
          minWidth="100%"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          pt="xl"
          gap="m"
        >
          {status !== 'general' ? (
            status === 'loading' ? (
              <ProgressIndicator
                maxWidth="1.5rem"
                maxHeight="1.5rem"
                variant="loading"
              />
            ) : (
              <Box
                padding="s"
                color={COLOR_MAP[status]}
                display="flex"
                borderRadius="50%"
                boxShadow="inset 0px 0px 0px 4px #FFFFFFB8"
                alignItems="center"
                width="fit-content"
                backgroundColor={`${COLOR_MAP[status]}Container`}
              >
                <Icon maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
              </Box>
            )
          ) : null}
          <Typography
            color="onSurface"
            textAlign="center"
            lineHeight="m"
            variant="body"
            size="medium"
          >
            {message}
          </Typography>
        </Box>

        {status !== 'loading' &&
        (secondaryButton?.label || primaryButton?.label) ? (
          <Box
            minWidth="100%"
            display="flex"
            justifyContent="space-between"
            pt="xl"
            flexDirection="row"
          >
            {!!secondaryButton?.label && (
              <Button
                marginRight="s"
                justifyContent="center"
                flex="1"
                variant="outline"
                onClick={secondaryButton.onClick}
                borderColor="outlineVariant"
              >
                {secondaryButton.label}
              </Button>
            )}
            {!!primaryButton?.label && (
              <Button
                onClick={primaryButton.onClick}
                backgroundColor={status === 'error' ? 'error' : ''}
                justifyContent="center"
                flex="2"
                variant="filled"
              >
                {primaryButton.label}
              </Button>
            )}
          </Box>
        ) : null}
      </Box>
    </Modal>
  );
};
