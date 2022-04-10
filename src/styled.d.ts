import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string,
      black: string,
      blue: string,
    },
    font: {
      sizes: {
        big: string,
      }
    },
    breakpoints: {
      sizes: {
        minorDesktop: number,
      },
      unit: string,
    }
  }
}