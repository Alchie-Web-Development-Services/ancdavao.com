import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import {
  GOOGLE_ANALYTICS_ID,
  GOOGLE_TAG_MANAGER_ID,
} from "@/utils/constant/general";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="afterInteractive"
        ></Script>
        <div
          className="elfsight-app-42e337d2-942a-4a49-a1e1-0897682d1bd3 hidden"
          data-elfsight-app-lazy
        ></div>
        {GOOGLE_ANALYTICS_ID && <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />}
        {GOOGLE_TAG_MANAGER_ID && (
          <GoogleTagManager gtmId={GOOGLE_TAG_MANAGER_ID} />
        )}
      </body>
    </Html>
  );
}
