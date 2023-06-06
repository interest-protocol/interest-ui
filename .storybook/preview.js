import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';

import { darkTheme, lightTheme } from '../src/lib/theme';
import GlobalStyles from '../src/lib/theme/global-styles';

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

// Function to obtain the intended theme
const getTheme = (themeName) => themes[themeName];

const Decorator = (Story, context) => {
  const theme = getTheme(context.globals.theme);

  return (
    <div id="__wrapper">
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <Story />
      </ThemeProvider>
    </div>
  );
};

export const decorators = [Decorator];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: lightTheme.colors.surface,
      },
      {
        name: 'dark',
        value: darkTheme.colors.surface,
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: ['light', 'dark'],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
