import React from 'react'
import Link from 'next/link';
import StreamAsks from '../../components/Orderbook/StreamAsks';
import Head from 'next/head';

export default function socketpage() {
        return (
            <>
                <Head>
                    <title>BTCSocket</title>
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
socket.onmessage = function (event) {
    const stream = JSON.parse(event.data)
    console.log(stream);
}
*/