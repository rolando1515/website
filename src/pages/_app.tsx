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
      {/* Note that this should be beneath this component, you can absolute
      position it beneath but this component is essentially the content of your
      page and ypur footer should be beneath it. */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
