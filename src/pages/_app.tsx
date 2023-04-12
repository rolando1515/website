import type { AppProps } from 'next/app';
import { GlobalStyle } from 'styles';

import './_app.css';
import { Header } from 'ui/shared';
import { Footer } from 'ui/shared/Footer/footer';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Footer/>
      <Component {...pageProps} />
    </>
  );
}
