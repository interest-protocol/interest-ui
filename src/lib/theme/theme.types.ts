export type Boxes = 'container';
export type Radii = '2xs' | 'xs' | 's' | 'm' | 'l' | 'half' | 'full';
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
export type ButtonVariants = 'filled' | 'outline' | 'text' | 'tonal';
export type ButtonSizes = 'small' | 'medium';
export type TagVariants = 'filled' | 'outline';
export type TagSizes = 'small' | 'medium' | 'large';
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
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  warning: string;
  onWarning: string;
  warningContainer: string;
  onWarningContainer: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  success: string;
  onSuccess: string;
  successContainer: string;
  onSuccessContainer: string;
  surface: string;
  lowestContainer: string;
  lowContainer: string;
  container: string;
  highContainer: string;
  highestContainer: string;
  onSurface: string;
  outline: string;
  outlineVariant: string;
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
export type Typographies = 'body' | 'display' | 'headline' | 'label' | 'title';

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
  radii: Record<Radii, string>;
  space: Record<Space, string>;
  shadows: Record<Shadows, string>;
  breakpoints: ReadonlyArray<string>;
  fontSizes: Record<FontSizes, string>;
  boxes: Record<Boxes, MaybeNestedObject>;
  lineHeights: Record<LineHeights, string>;
  tags: Record<TagVariants, MaybeNestedObject>;
  gradient: Record<Gradient, MaybeNestedObject>;
  buttons: Record<ButtonVariants, MaybeNestedObject>;
  typography: Record<Typographies, MaybeNestedObject>;
}
