import React, { FC } from 'react';

import { Box, Typography } from '../../elements';
import { Button } from '../button';
import { ProgressIndicator } from '../progress-indicator';
import { COLOR_MAP, STATUS_ICON } from './dialog.data';
import { DialogProps, IDialogButton } from './dialog.types';

export const Dialog: FC<DialogProps> = ({
  title,
  status,
  message,
  fontFamily,
  primaryButton,
  secondaryButton,
}) => {
  const Icon = STATUS_ICON[status];

  return (
    <Box
      p="xl"
      width="25rem"
      maxWidth="100%"
      borderRadius="xs"
      alignItems="center"
      display="inline-flex"
      flexDirection="column"
      justifyContent="center"
      boxShadow="dropShadow.2xl"
      backgroundColor="lowestContainer"
      data-testid="dialog"
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
            status === 'loading' || 'general' ? 'onSurface' : COLOR_MAP[status]
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
      {(secondaryButton || primaryButton) && (
        <Box
          pt="xl"
          display="flex"
          minWidth="100%"
          justifyContent="space-between"
          flexDirection="row"
        >
          {!!secondaryButton &&
            (React.isValidElement(secondaryButton)
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
                    data-testid="close-button"
                  >
                    {(secondaryButton as IDialogButton).label}
                  </Button>
                ))}
          {!!primaryButton &&
            (React.isValidElement(primaryButton)
              ? primaryButton
              : !!(primaryButton as IDialogButton)?.label && (
                  <Button
                    onClick={(primaryButton as IDialogButton).onClick}
                    backgroundColor={status === 'error' ? 'error' : ''}
                    justifyContent="center"
                    flex="3"
                    variant="filled"
                    borderRadius="xs"
                    data-testid="got-it-button"
                  >
                    {(primaryButton as IDialogButton).label}
                  </Button>
                ))}
        </Box>
      )}
    </Box>
  );
};

export * from './dialog.types';
