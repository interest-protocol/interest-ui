import { ReactNode } from 'react';

export interface IDialogButton {
  label: string;
  onClick?: () => void;
}

export interface DialogProps {
  title: string;
  message: string;
  fontFamily?: string;
  primaryButton?: IDialogButton | ReactNode;
  secondaryButton?: IDialogButton | ReactNode;
  status: 'success' | 'warning' | 'error' | 'info' | 'general' | 'loading';
}
