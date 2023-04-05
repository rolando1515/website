import type { AppProps } from 'next/app';
import { GlobalStyle } from 'styles';

import './_app.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <h1>Welcome to the Roland Portfolio</h1>
      <Component {...pageProps} />
    </>
  );
}
