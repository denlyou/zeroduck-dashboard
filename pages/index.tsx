// ** 리액트 임포트 **
import { ChangeEvent, MouseEvent, ReactNode, useState } from 'react'
// ** 넥스트 임포트 **
import Link from 'next/link'
// ** 헤드 레이아웃 **
import Head from 'next/head'
import Login from './login/index'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Link href="/dashboard" >로그인</Link> 페이지 작업 */}
        <Login/>
      </main>
    </div>
  )
}
