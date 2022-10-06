import Head from 'next/head'

export default function HeadC() {
  return (
    <Head>
      <title>Brick Maxi</title>
      <link rel="shortcut icon" href="favicon.ico" sizes="48x48" />
      <meta property="og:url" content="https://brickmaxi.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Brick Maxi" />
      <meta name="twitter:card" content="summary" />
      <meta property="og:description" content="Art that pays dividends" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="400" />
      <meta property="og:image" content="../../assets/previewImg.png" />
    </Head>
  )
}
