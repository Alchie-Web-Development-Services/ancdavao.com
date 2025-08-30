import { useRef, type ReactElement, type ReactNode } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/context/AuthContext";

// Support for per-page layout
export type NextPageWithLayout = NextPage & {
  getLayout?: (_page: ReactElement) => ReactNode;
  headerRef?: React.RefObject<HTMLDivElement>;
  footerRef?: React.RefObject<HTMLDivElement>;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const headerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SEO />
        <Header ref={headerRef} />
        {getLayout(<Component {...pageProps} headerRef={headerRef.current} footerRef={footerRef.current} />)}
        <Footer ref={footerRef} />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
