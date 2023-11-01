export type Boxes = 'container';
export type Radii = 'xs' | 's' | 'm' | 'l' | 'full';
export type Space = 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl';
export type ButtonVariants = 'filled' | 'outline' | 'text' | 'tonal' | 'icon';
export type ButtonSizes = 'small' | 'medium';
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
  | '6xl';
export type Colors = {
  error: string;
  success: string;
  warning: string;
  onSurface: string;
  onSurfaceVariant: string;
  inverseOnSurface: string;
  inverseSurface: string;
  primary: string;
  'primary.onPrimary': string;
  'primary.primaryContainer': string;
  'primary.onPrimaryContainer': string;
  secondary: string;
  'secondary.onSecondary': string;
  'secondary.secondaryContainer': string;
  'secondary.onSecondaryContainer': string;
  outline: string;
  'outline.outlineVariant': string;
  surface: string;
  'surface.surfaceVariant': string;
  'surface.containerHighest': string;
  'surface.containerHigh': string;
  'surface.container': string;
  'surface.containerLow': string;
  'surface.containerLowest': string;
  'surface.dim': string;
};
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
  colors: Colors;
  radii: Record<Radii, string>;
  space: Record<Space, string>;
  breakpoints: ReadonlyArray<string>;
  fontSizes: Record<FontSizes, string>;
  boxes: Record<Boxes, MaybeNestedObject>;
  lineHeights: Record<LineHeights, string>;
  buttons: Record<ButtonVariants, MaybeNestedObject>;
  typography: Record<Typographies, MaybeNestedObject>;
}
