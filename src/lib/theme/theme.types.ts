export type Radii = 'm';
export type Boxes = 'container';
export type ButtonSizes = 'icon' | 'medium' | 'large';
export type Space = 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl';
export type ButtonVariants = 'filled' | 'outline' | 'text' | 'icon';
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
export type Colors =
  | 'accent'
  | 'outline'
  | 'background'
  | 'text'
  | 'textAccent'
  | 'textDisabled'
  | 'disabled';

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
  buttonSizes: Record<ButtonSizes, MaybeNestedObject>;
  buttonVariants: Record<ButtonVariants, MaybeNestedObject>;
}
