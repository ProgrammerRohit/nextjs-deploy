import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/dragula@3.7.3/dist/dragula.min.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <Script
          src="https://cdn.jsdelivr.net/npm/dragula@3.7.3/dist/dragula.min.js"
          strategy="beforeInteractive"
        />
        <NextScript />
      </body>
    </Html>
  );
}
