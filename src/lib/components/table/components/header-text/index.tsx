import { P } from '@stylin.js/elements';
import React, { FC } from 'react';

import { HeaderTextProps } from './header-text.types';

const HeaderText: FC<HeaderTextProps> = ({ children }) => (
  <P
    color="#FFFFFF"
    fontSize="1rem"
    fontWeight="500"
    fontFamily="Inter"
    display={['none', 'none', 'block', 'block']}
  >
    {children}
  </P>
);

export default HeaderText;
