import { hasPath } from 'ramda';

import {
  Custom,
  ModalContentProps,
  StandardizedWithButton,
  StandardizedWithCloseButton,
} from './modal.types';

export const isCustomContent = (
  props: Omit<ModalContentProps, 'isOpen'>
): props is Custom => {
  if (hasPath(['custom'], props)) return true;

  return false;
};

export const hasModalButton = (
  props: Omit<ModalContentProps, 'isOpen'>
): props is StandardizedWithButton => {
  if (hasPath(['buttonText'], props)) return true;

  return false;
};

export const hasCloseButton = (
  props: Omit<ModalContentProps, 'isOpen'>
): props is StandardizedWithCloseButton => {
  if (hasPath(['hasCloseButton'], props)) return true;

  return false;
};
