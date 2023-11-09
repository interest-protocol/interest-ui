import { css } from '@emotion/react';

export const GlobalStyles = css`
  @font-face {
    font-family: 'Proto';
    src: url('/public/proto/ProtoMono-Regular.eot');
    src: local('Proto Mono Regular'), local('ProtoMono-Regular'),
      url('/public/proto/ProtoMono-Regular.eot?#iefix')
        format('embedded-opentype'),
      url('/public/proto/ProtoMono-Regular.woff2') format('woff2'),
      url('/public/proto/ProtoMono-Regular.woff') format('woff'),
      url('/public/proto/ProtoMono-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proto';
    src: url('/public/proto/ProtoMono-Medium.eot');
    src: local('Proto Mono Medium'), local('ProtoMono-Medium'),
      url('/public/proto/ProtoMono-Medium.eot?#iefix')
        format('embedded-opentype'),
      url('/public/proto/ProtoMono-Medium.woff2') format('woff2'),
      url('/public/proto/ProtoMono-Medium.woff') format('woff'),
      url('/public/proto/ProtoMono-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Satoshi';
    src: url('/public/satoshi/Satoshi-Medium.woff2') format('woff2'),
      url('/public/satoshi/Satoshi-Medium.woff') format('woff'),
      url('/public/satoshi/Satoshi-Medium.ttf') format('truetype');
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Satoshi';
    src: url('/public/satoshi/Satoshi-Bold.woff2') format('woff2'),
      url('/public/satoshi/Satoshi-Bold.woff') format('woff'),
      url('/public/satoshi/Satoshi-Bold.ttf') format('truetype');
    font-weight: 700;
    font-display: swap;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Satoshi';
  }
`;
