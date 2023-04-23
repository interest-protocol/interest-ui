import { useTheme } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';
import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { v4 } from 'uuid';

import { Box, Motion } from '../../elements';
import { Theme } from '../../theme';
import { Button } from '../button';
import { ModalContentProps, ModalContentWrapperProps } from './modal.types';
import { hasModalButton, isCustomContent } from './modal.utils';
import { ModalHeader } from './modal-header';

const renderMaybeChildrenArray = (children: ReactNode, dark: boolean) => {
  if (Array.isArray(children))
    return children.map((child) => (
      <Box
        key={v4()}
        width="100%"
        display="flex"
        flexDirection="column"
        borderTop={`1px solid ${dark ? '#3A3D4C' : '#D5DDF5'}`}
      >
        {child}
      </Box>
    ));

  return children;
};

const ModalContentWrapper: FC<PropsWithChildren<ModalContentWrapperProps>> = ({
  button,
  isOpen,
  children,
}) => (
  <AnimatePresence>
    {isOpen && (
      <Motion
        display="flex"
        flexDirection="column"
        exit={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
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
        {button}
      </Motion>
    )}
  </AnimatePresence>
);

const ModalContent: FC<PropsWithChildren<ModalContentProps>> = ({
  isOpen,
  children,
  ...props
}) => {
  const { dark } = useTheme() as Theme;

  if (isCustomContent(props)) return <>{children}</>;

  const { title, Icon } = props;

  if (hasModalButton(props)) {
    const { buttonText, buttonProps } = props;

    return (
      <ModalContentWrapper
        isOpen={isOpen}
        button={<Button {...buttonProps}>{buttonText}</Button>}
      >
        <ModalHeader {...props} Icon={Icon} title={title} />
        {renderMaybeChildrenArray(children, dark)}
      </ModalContentWrapper>
    );
  }

  return (
    <ModalContentWrapper isOpen={isOpen}>
      <ModalHeader {...props} Icon={Icon} title={title} />
      {renderMaybeChildrenArray(children, dark)}
    </ModalContentWrapper>
  );
};

export default ModalContent;
