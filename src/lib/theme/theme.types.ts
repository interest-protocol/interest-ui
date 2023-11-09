export type Boxes = 'container';
export type Radii = 'xs' | 's' | 'm' | 'l' | 'full';
export type Space =
  | '2xs'
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
  | '9xl'
  | '10xl'
  | '11xl'
  | '12xl'
  | '13xl'
  | '14xl'
  | '15xl'
  | '16xl'
  | '17xl'
  | '18xl';
export type ButtonVariants = 'filled' | 'outline' | 'text' | 'tonal' | 'icon';
export type ButtonSizes = 'small' | 'medium';
export type FontSizes =
  | '2xs'
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
export type Shadows =
  | 'primary.xs'
  | 'primary.s'
  | 'primary.m'
  | 'primary.l'
  | 'primary.xl'
  | 'primary.2xl'
  | 'dropShadow.xs'
  | 'dropShadow.s'
  | 'dropShadow.m'
  | 'dropShadow.l'
  | 'dropShadow.xl'
  | 'dropShadow.2xl';
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

export type Gradient =
  | 'linearGradientBlack.0deg'
  | 'linearGradientBlack.74deg'
  | 'linearGradientBlack.90deg'
  | 'linearGradientBlue.0deg'
  | 'linearGradientBlue.74deg'
  | 'linearGradientBlue.90deg';

export interface MaybeNestedObject {
  [key: string]: string | number | Partial<MaybeNestedObject>;
}

export interface Theme {
  dark: boolean;
  colors: Colors;
  gradient: Record<Gradient, MaybeNestedObject>;
  radii: Record<Radii, string>;
  space: Record<Space, string>;
  shadows: Record<Shadows, string>;
  breakpoints: ReadonlyArray<string>;
  fontSizes: Record<FontSizes, string>;
  boxes: Record<Boxes, MaybeNestedObject>;
  lineHeights: Record<LineHeights, string>;
  buttons: Record<ButtonVariants, MaybeNestedObject>;
  typography: Record<Typographies, MaybeNestedObject>;
}
