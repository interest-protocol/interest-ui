export type Radii = 'm';
export type Boxes = 'container';
export type Space = 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl';
export type ButtonVariants = 'filled' | 'outline' | 'text' | 'icon';
export type ProgressVariants = 'bar' | 'round';
export type FontSizes =
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';
export type LineHeights =
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl';
export type Colors =
  | 'text'
  | 'error'
  | 'accent'
  | 'warning'
  | 'outline'
  | 'success'
  | 'disabled'
  | 'background'
  | 'textAccent'
  | 'textDisabled'
  | 'textPlaceholder';
export type Typographies =
  | 'displayLarge'
  | 'displaySmall'
  | 'extraSmall'
  | 'large'
  | 'medium'
  | 'small'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'title4'
  | 'title5'
  | 'title6';

interface MaybeNestedObject {
  [key: string]: string | number | Partial<MaybeNestedObject>;
}

export interface Theme {
  dark: boolean;
  radii: Record<Radii, string>;
  space: Record<Space, string>;
  colors: Record<Colors, string>;
  breakpoints: ReadonlyArray<string>;
  fontSizes: Record<FontSizes, string>;
  boxes: Record<Boxes, MaybeNestedObject>;
  lineHeights: Record<LineHeights, string>;
  typography: Record<Typographies, MaybeNestedObject>;
  buttons: Record<ButtonVariants, MaybeNestedObject>;
}
