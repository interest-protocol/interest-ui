import { Div, P } from '@stylin.js/elements';
import React, { FC, PropsWithChildren } from 'react';
import { AssetRowWrapperProps } from './asset-row.types';

const AssetRowWrapper: FC<PropsWithChildren<AssetRowWrapperProps>> = ({
  TokenIcon,
  symbol,
  supportingText,
  children,
}) => {
  return (
    <Div
      p="0.5rem"
      display="flex"
      bg="#222222"
      borderRadius="1rem"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      data-testid="asset-row-wrapper"
    >
      <Div gap="0.75rem" display="flex" alignItems="center">
        {TokenIcon}
        <Div
          display="flex"
          alignItems="flex-start"
          flexDirection="column"
          justifyContent="center"
        >
          <P
            lineHeight="1rem"
            fontFamily="Satoshi"
            fontSize="0.875rem"
            color="#fff"
            data-testid="asset-symbol"
          >
            {symbol}
          </P>
          <P
            mt="0.15rem"
            color="#fff"
            fontWeight="400"
            lineHeight="1rem"
            fontSize="0.75rem"
            fontFamily="Satoshi"
            data-testid="asset-price"
          >
            {supportingText}
          </P>
        </Div>
      </Div>
      {children}
    </Div>
  );
};

export default AssetRowWrapper;
