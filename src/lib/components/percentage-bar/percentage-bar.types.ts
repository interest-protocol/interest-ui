export interface BalanceItemProps {
  balance: number;
}

export interface PercentageBarProps {
  total: number;
  balanceData: ReadonlyArray<BalanceItemProps>;
}
