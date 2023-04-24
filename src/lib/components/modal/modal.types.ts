import { ReactNode } from 'react';
import { Props } from 'react-modal';

import { ButtonProps } from '../button/button.types';

interface IOpenState {
  isOpen: boolean;
}

export interface Custom {
  custom: boolean;
}

export interface Standardized {
  title: string;
  Icon?: ReactNode;
}

export interface StandardizedWithCloseButton extends Standardized {
  onClose: () => void;
  hasCloseButton: boolean;
}

export type StandardizedWithButton = (
  | Standardized
  | StandardizedWithCloseButton
) & {
  buttonText: string;
  buttonProps: ButtonProps;
};

type StandardizedTypes = Standardized | StandardizedWithCloseButton;

export type ModalContentProps = IOpenState &
  (Custom | StandardizedTypes | StandardizedWithButton);

export type ModalProps = Props &
  IOpenState &
  ModalContentProps & {
    opaque?: boolean;
    allowClose?: boolean;
    onClose?: StandardizedWithCloseButton['onClose'];
  };

export interface ModalContentWrapperProps extends IOpenState {
  button?: ReactNode;
}
