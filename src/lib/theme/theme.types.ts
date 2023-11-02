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
  primary: string;
  'primary.onPrimary': string;
  'primary.primaryContainer': string;
  'primary.onPrimaryContainer': string;
  warning: string;
  'warning.onWarning': string;
  'warning.warningContainer': string;
  'warning.onWarningContainer': string;
  error: string;
  'error.onError': string;
  'error.errorContainer': string;
  'error.onErrorContainer': string;
  success: string;
  'success.onSuccess': string;
  'success.successContainer': string;
  'success.onSuccessContainer': string;
  surface: string;
  'surface.containerLowest': string;
  'surface.containerLow': string;
  'surface.container': string;
  'surface.containerHigh': string;
  'surface.containerHighest': string;
  onSurface: string;
  outlile: string;
  'outline.varient': string;
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

export interface MaybeNestedObject {
  [key: string]: string | number | Partial<MaybeNestedObject>;
}

export interface Theme {
  dark: boolean;
  colors: Colors;
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
