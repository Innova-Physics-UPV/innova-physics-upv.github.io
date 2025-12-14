//Introducir etiquetas lang para SEO
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <title>Innova Physics Upv</title>
        {/* Meta tags globales */}
        <meta charSet="UTF-8" />
         <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        {/* Fuentes globales */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Favicon */}
        <link rel="icon" href="/logos/isotipo_COLOR.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
