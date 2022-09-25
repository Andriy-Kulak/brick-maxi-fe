import Head from 'next/head'

export default function HeadC() {
  return (
    <Head>
      <title>Brick Maxi 1</title>
      <meta property="og:url" content="https://brickmaxi.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Social Media Preview Working?" />
      <meta name="twitter:card" content="summary" />
      <meta
        property="og:description"
        content="Hurray!! Yes Social Media Preview is Working"
      />
      <meta property="og:image" content="../../assets/previewImg.png" />
    </Head>
  )
}
