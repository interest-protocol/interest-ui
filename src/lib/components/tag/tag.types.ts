export type TAG_TYPE =
  | 'curve'
  | 'stable'
  | 'earn'
  | 'success'
  | 'staked'
  | 'volatile';

export interface TagProps {
  type: TAG_TYPE;
  label?: string;
  small?: boolean;
  onClick?: () => void;
}
