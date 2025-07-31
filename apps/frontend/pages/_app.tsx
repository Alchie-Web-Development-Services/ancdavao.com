import type { AppProps } from "next/app";
import "../src/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
