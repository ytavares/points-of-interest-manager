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
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;500;700&family=Open+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
