import { ReactNode } from 'react';

export interface AssetRowProps {
  token: AssetMetadata;
  price?: number;
  priceChange24HoursPercentage?: number;
  isConvertible?: boolean;
  balance: number;
  TokenIcon: ReactNode;
}

export interface AssetRowWrapperProps {
  symbol: string;
  TokenIcon: ReactNode;
  supportingText: string;
}

export enum TokenStandard {
  COIN = 'v1',
  FA = 'v2',
}

export type AssetMetadata = {
  name: string;
  type: string;
  symbol: string;
  iconUri?: string;
  decimals: number;
  projectUri?: string;
  standard: TokenStandard;
};
