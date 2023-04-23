import { ReactNode } from 'react';
import { Props } from 'react-modal';

import { ButtonProps } from '../button/button.types';

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

export type ModalContentProps =
  | CustomContent
  | StandardizedContent
  | StandardizedContentWithButton;

export type ModalProps = Props &
  ModalContentProps & {
    isOpen: boolean;
    opaque?: boolean;
    onClose?: () => void;
  };
