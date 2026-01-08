import { Div } from '@stylin.js/elements';
import React, { FC, useEffect, useState } from 'react';

import TableBodyContent from './body';
import TableHeader from './header';
import { TableHeaderProps } from './table.types';

const Table: FC<TableHeaderProps> = ({ rows, ...props }) => {
  const [isAsc, setIsAsc] = useState(true);
  const [currentRows, setCurrentRows] = useState(rows);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSort = (index: number) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getNumericValue = (v: any) => {
      const clean = String(v?.cells[index]?.Title ?? '').replace(
        /[^\d.-]/g,
        ''
      );
      const num = parseFloat(clean);
      if (isNaN(num)) return 0;

      const upper = String(v?.cells[index]?.Title ?? '').toUpperCase();
      if (upper.includes('M')) return num * 1_000_000;
      if (upper.includes('K')) return num * 1_000;
      return num;
    };

    const sorted = [...rows].sort((a, b) => {
      const valA = getNumericValue(a);
      const valB = getNumericValue(b);
      return isAsc ? valA - valB : valB - valA;
    });

    setCurrentRows(sorted);
    setIsAsc(!isAsc);
  };

  useEffect(() => {
    setCurrentRows(rows);
  }, [rows]);

  return (
    <Div
      width="100%"
      borderStyle="solid"
      borderRadius="0.5rem"
      borderColor=" #1F2937"
      borderWidth="0px 1px 1px 1px"
      overflow="auto"
      role="custom-table"
    >
      <TableHeader sortRows={handleSort} {...props} />
      <TableBodyContent rows={currentRows} {...props} />
    </Div>
  );
};

export default Table;
