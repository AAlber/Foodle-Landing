import { NextPage } from 'next';
import { Head, Html, Main, NextScript } from 'next/document';

const Document:NextPage= ()=> {
    
  return (
    <Html>
      <Head>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
export default Document;
