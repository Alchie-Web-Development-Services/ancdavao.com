import type { AppProps } from "next/app";
import "../src/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SEO />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </QueryClientProvider>
  );
}

export default MyApp;
