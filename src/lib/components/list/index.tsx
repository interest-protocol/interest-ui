import React, { FC, PropsWithChildren, useState } from 'react';

import { Box, Motion } from '../../elements';
import { ArrowRightSVG } from '../../icons';
import { ListItem } from '../list-item';
import { ListProps } from './list.types';

export const List: FC<PropsWithChildren<ListProps>> = ({ title, items }) => {
  const [openList, setOpenList] = useState(false);

  return (
    <Box
      role="list"
      width="max-content"
      onMouseEnter={() => setOpenList(true)}
      onMouseLeave={() => setOpenList(false)}
    >
      <ListItem
        title={title}
        SuffixIcon={
          <Motion
            display="flex"
            role="listitem"
            width="0.313rem"
            height="0.626rem"
            color="onSurface"
            transition={{ duration: 0.05 }}
            animate={{
              transform: openList ? 'rotate(90deg)' : 'rotate(0deg)',
            }}
            initial={{ transform: 'rotate(0deg)' }}
          >
            <ArrowRightSVG
              width="100%"
              height="100%"
              maxWidth="0.313rem"
              maxHeight="0.626rem"
            />
          </Motion>
        }
      />
      <Motion
        width="100%"
        role="listbox"
        initial={{ display: 'none' }}
        transition={{ duration: 0.05 }}
        animate={{ display: openList ? 'block' : 'none' }}
      >
        {items.map((item) => item)}
      </Motion>
    </Box>
  );
};

export * from './list.types';
