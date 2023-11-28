import { ThemeProvider as StyledThemeProvider } from '@emotion/react';
import { DefaultTheme } from './DefaultTheme';

interface Props<T extends DefaultTheme = DefaultTheme> {
  theme: T;
  children?: React.ReactNode | undefined;
}

export const ThemeProvider = <T extends DefaultTheme>(props: Props<T>) => (
  <StyledThemeProvider theme={props.theme}>
    {props.children}
  </StyledThemeProvider>
);
