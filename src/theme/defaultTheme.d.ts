import styled from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontWeightThin: number;
    fontWeightNormal: number;
    fontWeightBold: number;
    colorDark: string;
    colorDarkBlue: string;
    colorLight: string;
    fontSizeLittle: string;
    fontSizeSmall: string;
    fontSizeNormal: string;
    fontSizeBig: string;
    borderRadius: string;
    transitionStyle: string;
  }
}
