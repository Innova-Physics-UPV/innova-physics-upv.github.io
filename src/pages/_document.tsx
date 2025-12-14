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
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=yes"

         />

        {/* ----- CSS principal de Next, NO BLOQUEANTE ----- */}
        <link
          rel="preload"
          href="/_next/static/css/5035b20933870640.css"
          as="style"
        />

        <link
          rel="stylesheet"
          href="/_next/static/css/5035b20933870640.css"
          media="print"
          onLoad={(event: React.SyntheticEvent<HTMLLinkElement, Event>) => {
          const target = event.target as HTMLLinkElement;
          target.media = "all";
          }}
        />

        {/* ----- GOOGLE FONTS optimizado ----- */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          as="style"
        />


        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          media="print"
          onLoad={(event: React.SyntheticEvent<HTMLLinkElement, Event>) => {
          const target = event.target as HTMLLinkElement;
          target.media = "all";
          }}
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
