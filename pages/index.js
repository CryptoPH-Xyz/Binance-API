import Head from 'next/head';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Head>
        <title>My Project</title>
      </Head>

      <div className="flex flex col">
                <div className="ml-8 text-l hover:text-blue-500"><Link href='/BTCpage'>BTC/USDT</Link></div>
                <div className="ml-8 text-l hover:text-blue-500"><Link href='/ETHpage'>ETH/USDT</Link></div>
                <div className="ml-8 text-l hover:text-blue-500"><Link href='/DOGEpage'>DOGE/USDT</Link></div>
                <div className="ml-8 text-l hover:text-blue-500"><Link href='/BTCpage/socketpage'>BTCSocket</Link></div>
      </div>

    </>
  )
}
