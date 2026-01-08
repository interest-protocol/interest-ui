import { Div, P } from '@stylin.js/elements';
import React, { FC } from 'react';
import { NoSearchSVG } from '../../icons';

const NotFound: FC = () => (
  <Div
    py="2rem"
    flex="1"
    color="#E2E2E6"
    display="flex"
    overflowY="auto"
    gridColumn="1/-1"
    alignItems="center"
    flexDirection="column"
    gap={['1rem', '1.5rem']}
  >
    <NoSearchSVG maxHeight="1.25rem" maxWidth="1.25rem" width="100%" />
    <P fontWeight="700" fontSize="1rem" fontFamily="Satoshi">
      No tokens found
    </P>
    <P
      color="#9CA3AF"
      fontWeight="400"
      fontFamily="Satoshi"
      textAlign="center"
      fontSize="0.875rem"
    >
      We couldn&#39;t find any tokens matching your criteria.
    </P>
  </Div>
);

export default NotFound;
