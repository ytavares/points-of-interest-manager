/* eslint-disable @next/next/no-page-custom-font */
import { GlobalStyles } from '@/styles/global';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Theme from '@/styles/Theme';
import { ThemeProvider } from 'styled-components';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Map</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
