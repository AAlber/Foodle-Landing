import '../styles/app.scss';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import en from '../lang/en.json';
import de from '../lang/de.json';
import { usePostHog } from 'next-use-posthog';
import posthog from 'posthog-js';

import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
const SafeHydrate = ({ children }: { children: any }) => {
  return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>;
};
export const queryClient = new QueryClient();
const messages = {
  en,
  de,
};
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const initPosthog = () => {
    if (typeof window !== 'undefined') {
      posthog.init(process.env.POSTHOG_API_KEY!, { api_host: 'https://app.posthog.com' });
    }
    return posthog;
  };

  useEffect(() => {
    const postHog = initPosthog();
    // Track page views
    const handleRouteChange = () => {
      if (typeof window !== 'undefined') {
        console.log('being captured?');
        postHog.capture('$pageview');
        posthog.capture('my event', { property: 'value' });
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  const { locale } = useRouter();

  return (
    <SafeHydrate>
      {/* @ts-ignore */}
      <IntlProvider locale={locale!} messages={messages[locale!]}>
        <QueryClientProvider client={queryClient}>
          {/* @ts-ignore */}
          <Component {...pageProps} />
        </QueryClientProvider>
      </IntlProvider>
    </SafeHydrate>
  );
}

export default MyApp;
