import styled from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainWidth: string;
    colorDark: string;
    colorDarkBlue: string;
    colorLight: string;
    colorGray: string;
    colorDarkGray: string;
    colorGreen: string;
    colorWhite: string;
    fontWeightThin: number;
    fontWeightNormal: number;
    fontWeightSemiBold: number;
    fontWeightBold: number;
    fontSizeLittle: string;
    fontSize16: string;
    fontSizeMedium: string;
    fontSizeNormal: string;
    fontSize22: string;
    fontSize36: string;
    fontSize40: string;
    borderRadius: string;
    transitionStyle: string;
  }
}
