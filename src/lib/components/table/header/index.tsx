import { Div } from '@stylin.js/elements';
import React, { FC } from 'react';
import { v4 } from 'uuid';

import { CustomTableHeaderProps } from '../table.types';
import TableHeaderColumn from './header-column';

const TableHeader: FC<Omit<CustomTableHeaderProps, 'rows'>> = ({
  title,
  sortRows,
  gridTemplateColumns,
}) => {
  return (
    <Div
      width="100%"
      display="grid"
      bg="#9CA3AF1A"
      borderTopLeftRadius="0.5rem"
      borderTopRightRadius="0.5rem"
      minWidth={['1000px', '1000px', '400px', 'unset']}
      gridTemplateColumns={gridTemplateColumns || `repeat(${title.length},1fr)`}
    >
      {title.map((currentTitle, index) => {
        return (
          <TableHeaderColumn
            key={v4()}
            index={index}
            {...currentTitle}
            sortRows={sortRows}
          />
        );
      })}
    </Div>
  );
};

export default TableHeader;
