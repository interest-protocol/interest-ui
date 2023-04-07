import { Global, ThemeProvider } from '@emotion/react';
import { withThemes } from '@react-theming/storybook-addon';
import { addDecorator } from '@storybook/react';
import React from 'react';

import { darkTheme, lightTheme } from '../src/lib/theme';
import GlobalStyles from '../src/lib/theme/global-styles';

const Decorator = (Store) => (
  <>
    <Global styles={GlobalStyles} />
    <Store />
  </>
);
export const decorators = [Decorator];

const onThemeSwitch = (context) => {
  const { theme } = context;
  const {
    colors: { background },
  } = theme;
  const parameters = {
    backgrounds: {
      default: background,
    },
    // Pass backgrounds: null to disable background switching at all
  };
  return {
    parameters,
  };
};
const themingDecorator = withThemes(
  ThemeProvider,
  [
    { name: 'light', ...lightTheme },
    { name: 'dark', ...darkTheme },
  ],
  {
    onThemeSwitch,
  }
);
addDecorator(themingDecorator);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { disable: true },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
