import DefaultLayout from '@/components/Layout/Layout';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

