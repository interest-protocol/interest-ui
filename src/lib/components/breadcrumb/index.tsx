import { Div, P, A } from '@stylin.js/elements';
import React, { FC } from 'react';

import { BreadcrumbProps } from './breadcrumb.types';
import { ArrowRightSVG } from '../../icons';

const Breadcrumb: FC<BreadcrumbProps> = ({ basePage, currentPage }) => (
  <Div role="navigation" display="flex" gap="0.5rem" alignItems="center">
    <A href={`/${basePage.toLowerCase()}`} textDecoration="none">
      <P
        color="#9CA3AF"
        fontWeight="500"
        fontFamily="Satoshi"
        fontSize="0.875rem"
        lineHeight="1.25rem"
      >
        {basePage}
      </P>
    </A>
    <ArrowRightSVG
      maxWidth="0.75rem"
      maxHeight="0.75rem"
      width="100%"
      color="#9CA3AF"
    />
    <P
      color="#9CA3AF"
      fontWeight="500"
      fontFamily="Satoshi"
      fontSize="0.875rem"
      lineHeight="1.25rem"
    >
      {currentPage}
    </P>
  </Div>
);

export default Breadcrumb;
