import { Div, P, Span } from '@stylin.js/elements';
import React, { FC } from 'react';

import AssetRowWrapper from './asset-row-wrapper';
import { AssetRowProps } from './asset-row.types';
import { WrapSVG } from '../../icons';
import { formatDollars, formatMoney } from '../../../utils';
import { Button } from '../button';

const AssetRow: FC<AssetRowProps> = ({
  token,
  price,
  balance,
  TokenIcon,
  isConvertible,
  priceChange24HoursPercentage,
}) => {
  const priceChange = `${
    !priceChange24HoursPercentage
      ? ''
      : priceChange24HoursPercentage >= 0
      ? '+'
      : ''
  }${+(priceChange24HoursPercentage ?? 0).toFixed(2)}%`;

  return (
    <AssetRowWrapper
      symbol={token.symbol}
      TokenIcon={TokenIcon}
      supportingText={formatDollars(price ?? 0, 2)}
      data-testid="asset-price"
    >
      <Div display="flex" gap="0.5rem">
        {isConvertible && (
          <Button
            p="0.5rem"
            mr="unset"
            variant="text"
            color="#B4C5FF"
            borderRadius="999px"
            borderColor=" #B4C5FF"
            border="1px solid #B4C5FF"
            data-testid="convert-button"
          >
            <WrapSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
          </Button>
        )}
        <Div display="flex" gap="0.5rem" alignItems="center">
          <Div
            display="flex"
            alignItems="flex-end"
            flexDirection="column"
            justifyContent="flex-start"
          >
            <P
              mb="0.125rem"
              fontWeight="500"
              lineHeight="1rem"
              fontSize="0.875rem"
              fontFamily="Satoshi"
              color="#fff"
              data-testid="balance-amount"
            >
              {formatMoney(balance, 4)}
              <Span fontSize="Satoshi" ml="0.25rem">
                {token.symbol}
              </Span>
            </P>
            <Div
              px="0.5rem"
              mt="0.15rem"
              display="flex"
              alignItems="center"
              borderRadius="999px"
              justifyContent="center"
              border="1px solid #9CA3AF1A"
              bg={
                ['#16A24A33', '#E53E3E33'][
                  Number((priceChange24HoursPercentage ?? 0) < 0)
                ]
              }
              color={
                ['#5CD187', '#FF8181'][
                  Number((priceChange24HoursPercentage ?? 0) < 0)
                ]
              }
            >
              <P
                fontWeight="500"
                lineHeight="1rem"
                fontSize="0.625rem"
                fontFamily="Satoshi"
                data-testid="price-change"
                data-change={priceChange}
              >
                {priceChange}
              </P>
            </Div>
          </Div>
        </Div>
      </Div>
    </AssetRowWrapper>
  );
};

export default AssetRow;
