import { P } from '@stylin.js/elements';
import React, { FC } from 'react';

import { CellTextProps } from './cell-text.types';

const CellText: FC<CellTextProps> = ({ children, color }) => (
  <P color={color} fontWeight="500" fontFamily="Inter" fontSize="0.875rem">
    {children}
  </P>
);

export default CellText;
