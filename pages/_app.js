import DefaultLayout from '@/components/Layout/Layout';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

