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

export const convertViewportUnitsToPixels = (value: string) => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  if (value.endsWith('vw')) {
    const vw = parseFloat(value);
    return (vw / 100) * viewportWidth;
  } else if (value.endsWith('vh')) {
    const vh = parseFloat(value);
    return (vh / 100) * viewportHeight;
  } else {
    throw new Error('Value must end with "vw" or "vh"');
  }
};
