import Link from "next/link";

export default function AsideMenu() {
  return (
    <aside>
      <ul>
        <li><Link href="/dashboard" >대시보드</Link></li>
        <li><Link href="/tables" >테이블</Link></li>
        <li><Link href="/" >로그아웃</Link></li>
      </ul>
    </aside>
  )
}
