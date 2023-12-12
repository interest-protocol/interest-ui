export interface IDialogButton {
  label: string;
  onClick?: () => void;
}

export interface DialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  onClose?: () => void;
  secondaryButton?: IDialogButton;
  primaryButton?: IDialogButton;
  status: 'success' | 'warning' | 'error' | 'info' | 'general' | 'loading';
}
