import Head from 'next/head';
import DropdownButton from '../components/DropdownButton';
// import { chart } from '../components/Kline';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Project</title>
        <link src="https://unpkg.com/lightweight-charts/dist/lightweight-charts.standalone.production.js"></link>
      </Head>
      <DropdownButton />
    </>
  )
}
