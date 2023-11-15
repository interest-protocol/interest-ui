import { ButtonProps, IconButton } from './button.types';

export const isIconButton = (props: ButtonProps): props is IconButton =>
  (props as IconButton).isIcon !== undefined;
