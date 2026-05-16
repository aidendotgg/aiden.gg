import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Aiden's personal site" />
        <meta name="theme-color" content="#2563eb" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aiden.gg" />
        <meta property="og:description" content="Aiden's personal site" />
        <meta property="og:image" content="/me.jpeg" />
        <meta property="og:image:alt" content="aidendotgg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
