/** Note: This file is only for stories files theme usage */

import { ThemeProvider } from '@emotion/react';
import { DefaultTheme } from './DefaultTheme';

const theme: DefaultTheme & { test: string } = {
  type: 'light',
  common: {
    background: {
      primary: 'blue70',
      secondary: 'blue90',
    },
    component: {
      placeholder: 'gray40',
      background: 'gray20',
      text: 'white',
      subText: 'gray60',
      outline: 'blue48',
    },
  },
  test: 'white',
};

const StoriesThemeProvider = (props: { children?: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default StoriesThemeProvider;
