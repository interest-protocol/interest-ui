import React, { FC } from 'react';
import { v4 } from 'uuid';

import type { TagProps } from './tag.types';
import { Button } from '../button';
import { TAG_COLOR } from './tag.data';

const Tag: FC<TagProps> = ({ type, label, small, onClick }) => (
  <Button
    key={v4()}
    px="0.5rem"
    variant="filled"
    fontWeight="500"
    lineHeight="1rem"
    onClick={onClick}
    fontSize="0.75rem"
    bg={TAG_COLOR[type].bg}
    textTransform="capitalize"
    color={TAG_COLOR[type].color}
    py={small ? '0.05rem' : '0.25rem'}
    border={`1px solid ${TAG_COLOR[type].bg}`}
    cursor={onClick ? 'pointer' : 'default'}
    nHover={{
      borderColor: TAG_COLOR[type].color,
      fontWeight: '500',
    }}
  >
    {label || type}
  </Button>
);

export default Tag;
