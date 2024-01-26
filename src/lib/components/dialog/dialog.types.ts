import { ReactNode } from 'react';

export interface IDialogButton {
  label: string;
  onClick?: () => void;
}

export interface DialogProps {
  title: string;
  isOpen: boolean;
  message: string;
  fontFamily?: string;
  onClose?: () => void;
  secondaryButton?: IDialogButton | ReactNode;
  primaryButton?: IDialogButton | ReactNode;
  status: 'success' | 'warning' | 'error' | 'info' | 'general' | 'loading';
}
