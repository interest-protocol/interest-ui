import { prop } from 'ramda';

import {
  CustomContent,
  ModalContentProps,
  StandardizedContentWithButton,
} from './modal.types';

export const isCustomContent = (
  props: ModalContentProps
): props is CustomContent => {
  if (prop('custom', props)) return true;

  return false;
};

export const hasModalButton = (
  props: ModalContentProps
): props is StandardizedContentWithButton => {
  if (prop('buttonText', props)) return true;

  return false;
};
