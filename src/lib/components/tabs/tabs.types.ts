export interface TabsProps {
  tab: number;
  color?: string | ReadonlyArray<string>;
  total?: ReadonlyArray<number | string | null>;
  tabs: ReadonlyArray<string>;
  setTab: (tab: number) => void;
  isShortSize?: boolean;
}
