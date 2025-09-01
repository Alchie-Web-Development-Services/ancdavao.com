import { type ReactElement, type ReactNode } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/context/AuthContext";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { GOOGLE_ANALYTICS_ID, GOOGLE_TAG_MANAGER_ID } from "@/utils/constant/general";

// Support for per-page layout
export type NextPageWithLayout = NextPage & {
  getLayout?: (_page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SEO />
        <Header />
        {getLayout(<Component {...pageProps} />)}
        {GOOGLE_ANALYTICS_ID && <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />}
        {GOOGLE_TAG_MANAGER_ID && <GoogleTagManager gtmId={GOOGLE_TAG_MANAGER_ID} />}
        <Footer />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
