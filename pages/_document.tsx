import { Html, Head, Main, NextScript } from 'next/document'
const MyDocument = () => {
  return (
    <Html lang='en-US'>
      <Head></Head>
      <body className={`px-4 bg-egg max-w-screen overflow-x-hidden`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
