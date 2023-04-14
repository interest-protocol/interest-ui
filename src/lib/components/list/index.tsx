import { useTheme } from '@emotion/react';
import React, { FC, PropsWithChildren, useState } from 'react';
import { v4 } from 'uuid';

import { Box, Motion } from '../../elements';
import { ArrowRightSVG } from '../../icons';
import { Theme } from '../../theme';
import { ListItem } from '../list-item';
import { ListProps } from './list.types';

export const List: FC<PropsWithChildren<ListProps>> = ({ title, Items }) => {
  const theme = useTheme() as Theme;
  const [openList, setOpenList] = useState(false);
  return (
    <Box
      onMouseEnter={() => setOpenList(true)}
      onMouseLeave={() => setOpenList(false)}
      width={['100%', '100%', '22.5rem', '22.5rem']}
    >
      <ListItem
        title={title}
        SuffixIcon={
          <Motion
            transition={{ duration: 0.05 }}
            animate={{
              transform: openList ? 'rotate(90deg)' : 'rotate(0deg)',
            }}
            initial={{ transform: 'rotate(0deg)' }}
            width={'0.313rem'}
            height={'0.626rem'}
            as="div"
            display="flex"
            color={theme.dark ? '#F2F0F4' : '#001133'}
          >
            <ArrowRightSVG
              maxWidth={'0.313rem'}
              maxHeight={'0.626rem'}
              width={'100%'}
              height={'100%'}
            />
          </Motion>
        }
      />
      <Motion
        as="div"
        bg="red"
        width="100%"
        transition={{ duration: 0.05 }}
        animate={{ display: openList ? 'block' : 'none' }}
        initial={{ display: 'none' }}
      >
        {Items && Items.map((Item) => <Box key={v4()}>{Item}</Box>)}
      </Motion>
    </Box>
  );
};

export * from './list.types';
