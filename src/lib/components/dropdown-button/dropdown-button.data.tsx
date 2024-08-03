import React from 'react';

import { ListItemProps } from '../list-item';
import { RadioButton } from '../radio-button';

export const itemsList1: ListItemProps[] = [
  {
    title: 'Option 1',
    SuffixIcon: <RadioButton defaultValue={false} />,
  },
  {
    title: 'Option 2',
    SuffixIcon: <RadioButton defaultValue={false} />,
  },
];
