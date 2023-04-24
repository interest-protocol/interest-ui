import { useTheme } from '@emotion/react';
import React, { PropsWithChildren } from 'react';
import { FC } from 'react';
import ReactModal from 'react-modal';

import { Theme } from '../../theme';
import { ModalProps } from './modal.types';
import ModalContent from './modal-content';

export { setAppElement } from 'react-modal';

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  isOpen,
  opaque,
  onClose,
  allowClose,
  ...props
}) => {
  const { colors } = useTheme() as Theme;
  const background = `${colors?.background}${opaque ? '' : '88'}`;

  return (
    <ReactModal
      {...props}
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc={allowClose}
      shouldCloseOnOverlayClick={allowClose}
      style={{
        overlay: {
          background,
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        content: {
          padding: 0,
          border: 'none',
          maxWidth: '95vw',
          maxHeight: '95vh',
          borderRadius: '0',
          position: 'static',
          overflow: 'visible',
          background: 'transparent',
        },
      }}
    >
      <ModalContent isOpen={isOpen} onClose={onClose} {...props} />
    </ReactModal>
  );
};
