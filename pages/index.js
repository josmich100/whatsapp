import Head from 'next/head'
import SideBar from '../components/SideBar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jos Whatsapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <SideBar/>
    </div>
  )
}
