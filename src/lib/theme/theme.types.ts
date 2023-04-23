export type Boxes = 'container';
export type Radii = 's' | 'm' | 'full';
export type Space = 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl';
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
export type Surface =
  | 'surface'
  | 'surface1'
  | 'surface2'
  | 'surface3'
  | 'surface4'
  | 'surface5';
export type Colors =
  | 'text'
  | 'error'
  | 'border'
  | 'warning'
  | 'primary'
  | 'outline'
  | 'success'
  | 'disabled'
  | 'textSoft'
  | 'secondary'
  | 'background'
  | 'textAccent'
  | 'foreground'
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

export interface MaybeNestedObject {
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
  surface: Record<Surface, MaybeNestedObject>;
}
