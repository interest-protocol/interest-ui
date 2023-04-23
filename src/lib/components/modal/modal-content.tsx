import React, { FC, PropsWithChildren } from 'react';

import { Box } from '../../elements';
import { Button } from '../button';
import { ModalContentProps } from './modal.types';
import { hasModalButton, isCustomContent } from './modal.utils';
import { ModalHeader } from './modal-header';

const ModalContentWrapper: FC<PropsWithChildren> = ({ children }) => (
  <Box
    mb="m"
    color="text"
    display="flex"
    minWidth="21rem"
    borderRadius="m"
    surface="surface3"
    flexDirection="column"
  >
    {children}
  </Box>
);

const ModalContent: FC<PropsWithChildren<ModalContentProps>> = ({
  children,
  ...props
}) => {
  if (isCustomContent(props)) return <>{children}</>;

  const { title, hasCloseButton, Icon } = props;

  if (hasModalButton(props)) {
    const { buttonText, buttonProps } = props;

    return (
      <Box display="flex" flexDirection="column">
        <ModalContentWrapper>
          <ModalHeader
            Icon={Icon}
            title={title}
            hasCloseButton={hasCloseButton}
          />
          {children}
        </ModalContentWrapper>
        <Button {...buttonProps}>{buttonText}</Button>
      </Box>
    );
  }

  return (
    <ModalContentWrapper>
      <ModalHeader Icon={Icon} title={title} hasCloseButton={hasCloseButton} />
      {children}
    </ModalContentWrapper>
  );
};

export default ModalContent;
