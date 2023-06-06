import { mergeDeepRight } from 'ramda';

import { space } from '../../design-system/space';
import { button } from '../../variants';
import { institutionalColors } from './../institutional-colors';

const defaultButton = mergeDeepRight(button, {
  ':disabled': {
    opacity: '26%',
    cursor: 'not-allowed',
    color: institutionalColors.textDisabled,
    ':hover': {
      color: institutionalColors.textDisabled,
    },
  },
});

export const variants = {
  filled: mergeDeepRight(defaultButton, {
    color: institutionalColors.textAccent,
    background: institutionalColors.primary,
    ':disabled': {
      background: institutionalColors.disabled,
    },
  }),
  outline: mergeDeepRight(defaultButton, {
    border: '1px solid',
    color: institutionalColors.primary,
    borderColor: institutionalColors.outline,
    ':hover': {
      borderColor: institutionalColors.primary,
      background: `${institutionalColors.primary}08`,
    },
    ':disabled': {
      borderColor: institutionalColors.disabled,
      ':hover': { borderColor: institutionalColors.disabled },
    },
  }),
  text: mergeDeepRight(defaultButton, {
    color: institutionalColors.primary,
    ':hover': {
      background: `${institutionalColors.primary}08`,
    },
  }),
  icon: mergeDeepRight(button, {
    padding: space.s,
    color: institutionalColors.text,
    '@media (min-width: 36rem)': {
      padding: space.s,
    },
    ':hover': {
      background: `${institutionalColors.text}08`,
    },
    ':active': {
      background: `${institutionalColors.text}0B`,
    },
  }),
};
