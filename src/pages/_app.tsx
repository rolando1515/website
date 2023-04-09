import type { AppProps } from 'next/app';
import { GlobalStyle } from 'styles';

import './_app.css';
import { Header } from 'ui/shared';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
