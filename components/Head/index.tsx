import Head from 'next/head'

export default function HeadC() {
  return (
    <Head>
      <title>Brick Maxi 1</title>
      <meta property="og:url" content="https://brickmaxi.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Brick Maxi" />
      <meta name="twitter:card" content="summary" />
      <meta property="og:description" content="Art that pays dividens" />
      <meta property="og:image" content="../../assets/previewImg.png" />
    </Head>
  )
}
