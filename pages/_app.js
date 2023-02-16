import DefaultLayout from '@/components/Layout/Layout';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 
import '@/styles/globals.css'
import Script from 'next/script';
export default function App({ Component, pageProps }) {

  if( Component.getLayout){
    return Component.getLayout
 (<Component {...pageProps} />);
  }

  return (
    <DefaultLayout>
      <Component {...pageProps} />

      {/* Chat Bot Tawk */}
      <Script type="text/javascript" id="script">
        {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/63b5893247425128790b9f51/1gluhvs6v';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();`}
      </Script>

      
    </DefaultLayout>
  );
}

