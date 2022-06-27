import '../styles/app.scss';
import type { AppProps } from 'next/app';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'slick-carousel/slick/slick.css';
import 'swiper/css/bundle';
import 'slick-carousel/slick/slick-theme.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import en from '../lang/en.json';
import de from '../lang/de.json';

import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
export const queryClient = new QueryClient();
const messages = {
  en,
  de,
};

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  return (
    // @ts-ignore
    <IntlProvider locale={locale!} messages={messages[locale!]}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </IntlProvider>
  );
}

export default MyApp;
