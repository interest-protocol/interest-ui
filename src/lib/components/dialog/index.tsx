import React, { FC } from 'react';

import { Box, Typography } from '../../elements';
import { Button } from '../button';
import { Modal } from '../modal';
import { ProgressIndicator } from '../progress-indicator';
import { COLOR_MAP, STATUS_ICON } from './dialog.data';
import { DialogProps, IDialogButton } from './dialog.types';

export const Dialog: FC<DialogProps> = ({
  status,
  title,
  isOpen,
  message,
  fontFamily,
  primaryButton,
  secondaryButton,
}) => {
  const Icon = STATUS_ICON[status];

  return (
    <Modal custom isOpen={isOpen}>
      <Box
        p="xl"
        width="25rem"
        maxWidth="90%"
        borderRadius="xs"
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
            color={
              // eslint-disable-next-line no-constant-condition
              status === 'loading' || 'general'
                ? 'onSurface'
                : COLOR_MAP[status]
            }
            flex="1"
            textAlign="center"
            variant="title"
            size="large"
            {...(fontFamily && { fontFamily })}
          >
            {title}
          </Typography>
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
                p="s"
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
            {...(fontFamily && { fontFamily })}
          >
            {message}
          </Typography>
        </Box>
        {status !== 'loading' &&
        status !== 'general' &&
        (secondaryButton || primaryButton) ? (
          <Box
            minWidth="100%"
            display="flex"
            justifyContent="space-between"
            pt="xl"
            flexDirection="row"
          >
            {React.isValidElement(secondaryButton)
              ? secondaryButton
              : !!(secondaryButton as IDialogButton).label && (
                  <Button
                    marginRight="s"
                    justifyContent="center"
                    flex="1"
                    variant="outline"
                    onClick={(secondaryButton as IDialogButton).onClick}
                    borderColor="outlineVariant"
                    borderRadius="xs"
                    color={COLOR_MAP.info}
                  >
                    {(secondaryButton as IDialogButton).label}
                  </Button>
                )}
            {React.isValidElement(primaryButton)
              ? primaryButton
              : !!(primaryButton as IDialogButton)?.label && (
                  <Button
                    onClick={(primaryButton as IDialogButton).onClick}
                    backgroundColor={status === 'error' ? 'error' : ''}
                    justifyContent="center"
                    flex="3"
                    variant="filled"
                    borderRadius="xs"
                  >
                    {(primaryButton as IDialogButton).label}
                  </Button>
                )}
          </Box>
        ) : null}
      </Box>
    </Modal>
  );
};
