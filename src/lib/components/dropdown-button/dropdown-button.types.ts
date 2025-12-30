export interface DropdownOptionProps {
  value: string;
  label: string;
}

export interface DropdownProps {
  isRounded?: boolean;
  defaultIndex?: number;
  placeholder?: string;
  onClick?: (value: string) => void;
  options: ReadonlyArray<DropdownOptionProps>;
}
