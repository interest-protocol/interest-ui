import { Div, Span } from '@stylin.js/elements';
import React, { FC } from 'react';
import { v4 } from 'uuid';

import { TableHeaderColumnProps } from '../table.types';
import { CaretUpDownSVG } from '../../../icons';

const TableHeaderColumn: FC<TableHeaderColumnProps> = ({
  index,
  position,
  sortRows,
  isSortable,
  description,
}) => {
  return (
    <Div
      key={v4()}
      width="100%"
      gap="0.5rem"
      px="0.75rem"
      py="0.875rem"
      display="flex"
      alignItems="center"
      cursor={isSortable ? 'pointer' : 'default'}
      nHover={{
        opacity: isSortable ? '.6' : '1',
      }}
      onClick={() => {
        isSortable && sortRows(index);
      }}
    >
      <Span
        width="100%"
        color="#fff"
        display="block"
        fontSize="1rem"
        fontWeight="500"
        fontFamily="Satoshi"
        lineHeight="1.25rem"
        textAlign={position || 'left'}
      >
        {description}
      </Span>
      {isSortable && (
        <CaretUpDownSVG
          maxWidth="1rem"
          maxHeight="1rem"
          color="#9CA3AF"
          width="100%"
        />
      )}
    </Div>
  );
};

export default TableHeaderColumn;
