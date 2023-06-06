export type Boxes = 'container';
export type Radii = 's' | 'm' | 'full';
export type Space = 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl';
export type ButtonVariants = 'filled' | 'outline' | 'text' | 'icon';
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
  | '6xl'
  | '7xl';
export type IntitutionalColors =
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
  | 'textBackground'
  | 'textHighlighter'
  | 'textPlaceholder';
export type Colors = {
  error: string;
  success: string;
  warning: string;
  onSurface: string;
  onSurfaceVariant: string;
  inverseOnSurface: string;
  inverseSurface: string;
  primary: {
    primary: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
  };
  secondary: {
    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
  };
  outline: {
    outline: string;
    outlineVariant: string;
  };
  surface: {
    surfaceVariant: string;
    surface: string;
    containerHighest: string;
    containerHigh: string;
    container: string;
    containerLow: string;
    containerLowest: string;
    dim: string;
  };
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
  radii: Record<Radii, string>;
  space: Record<Space, string>;
  colors: Colors;
  institutionalColors: Record<IntitutionalColors, string>;
  breakpoints: ReadonlyArray<string>;
  fontSizes: Record<FontSizes, string>;
  boxes: Record<Boxes, MaybeNestedObject>;
  lineHeights: Record<LineHeights, string>;
  typography: Record<Typographies, MaybeNestedObject>;
  buttons: Record<ButtonVariants, MaybeNestedObject>;
}
