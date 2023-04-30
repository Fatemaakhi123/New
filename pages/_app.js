
import '@/styles/globals.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
     
    });
  }, []);
  return(
    <>
 <Head>
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />  
      </Head>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  <a href="#" className="scrollToTop"
      ><i className="fa-solid fa-arrow-up-from-bracket"></i
    ></a>
  </>
  )
}
