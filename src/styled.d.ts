import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string,
      black: string,
      blue: string,
      greyLight: string,
      greyMedium: string,
    },
    font: {
      sizes: {
        big: string,
        label: string,
        subtitle: string,
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