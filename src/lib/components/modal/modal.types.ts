import { ReactNode } from 'react';
import { Props } from 'react-modal';

import { ButtonProps } from '../button/button.types';

interface IOpenState {
  isOpen: boolean;
}

export interface CustomContent {
  custom: boolean;
}

export interface StandardizedContent {
  title: string;
  Icon?: ReactNode;
  hasCloseButton?: boolean;
}

export interface StandardizedContentWithButton extends StandardizedContent {
  buttonText: string;
  buttonProps: ButtonProps;
}

export type ModalContentProps = IOpenState &
  (CustomContent | StandardizedContent | StandardizedContentWithButton);

export type ModalProps = Props &
  IOpenState &
  ModalContentProps & {
    opaque?: boolean;
    allowClose?: boolean;
    onClose?: () => void;
  };

export interface ModalContentWrapperProps extends IOpenState {
  button?: ReactNode;
}
