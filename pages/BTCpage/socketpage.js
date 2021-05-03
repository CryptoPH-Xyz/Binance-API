import React from 'react'
import Link from 'next/link';
import StreamAsks from '../../components/Orderbook/StreamAsks';
import Head from 'next/head';

export default function socketpage() {
        return (
            <>
                <Head>
                    <title>Chart</title>
                    <script src = "https://unpkg.com/lightweight-charts/dist/lightweight-charts.standalone.production.js"></script>
                </Head>
                <div className="flex">
                    <div className="ml-8 text-l hover:text-blue-500"><Link href='/BTCpage'>BTC/USDT</Link></div>
                    <div className="ml-8 text-l hover:text-blue-500"><Link href='/ETHpage'>ETH/USDT</Link></div>
                    <div className="ml-8 text-l hover:text-blue-500"><Link href='/DOGEpage'>DOGE/USDT</Link></div>
                    <div className="ml-8 text-l hover:text-blue-500"><Link href='/BTCpage/socketpage'>BTCSocket</Link></div>
                </div>
                <StreamAsks />

            </>
        )


}

/*
const socket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@depth");
socket.onmessage = async function (event) {
    const stream = await JSON.parse(event.data)
    console.log(stream);
}
*/

/*
export const getServerSideProps = async () => {
    const socket = createSocket("wss://stream.binance.com:9443/ws/btcusdt@depth");
    const res = await fetch(socket)

    const stream = await res.json()

    return {
        props: { stream }
    }
}
*/

/*
const socket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@depth");
socket.onmessage = async function (event) {

    const stream = await JSON.parse(event.data) //converts string data to object
    
    return {
        props: { stream }
    }

}
*/