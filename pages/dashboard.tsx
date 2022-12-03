import Head from 'next/head'
import AsideMenu from '../components/layouts/AsideMenu'

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AsideMenu />

      <main>
        시작 대시보드 페이지
      </main>
    </div>
  )
}