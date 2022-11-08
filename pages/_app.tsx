import type { AppProps, NextWebVitalsMetric } from 'next/app';
import 'swiper/css/bundle';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import de from '../lang/de.json';
import en from '../lang/en.json';
import '../styles/app.scss';

import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
const SafeHydrate = ({ children }: { children: any }) => {
  return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>;
};
export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}
const messages = {
  en,
  de,
};
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale } = useRouter();

  return (
    <SafeHydrate>
      {/* @ts-ignore */}
      <IntlProvider locale={locale!} messages={messages[locale!]}>
          {/* @ts-ignore */}
          <Component {...pageProps} />
      </IntlProvider>
    </SafeHydrate>
  );
}

export default MyApp;
