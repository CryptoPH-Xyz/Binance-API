import React from 'react'
import Link from 'next/link';
import Stream from '../../components/Orderbook/Stream';
import Head from 'next/head';

export default function socketpage({ stream }) {
        return (
            <>
                <Head>
                    <title>BTCSocket</title>
                </Head>
                <div className="flex">
                    <div className="ml-8 text-l hover:text-blue-500"><Link href='/BTCpage'>BTC/USDT</Link></div>
                    <div className="ml-8 text-l hover:text-blue-500"><Link href='/ETHpage'>ETH/USDT</Link></div>
                    <div className="ml-8 text-l hover:text-blue-500"><Link href='/DOGEpage'>DOGE/USDT</Link></div>
                    <div className="ml-8 text-l hover:text-blue-500"><Link href='/BTCpage/socketpage'>WebSocket</Link></div>
                </div>
                <Stream stream={stream}/>
                <div>
                    This page only streams data into console
                </div>

            </>
        )


}

const socket = new WebSocket("wss://stream.binance.com:9443/stream?streams=btcusdt@depth/btcusdt@kline_5m");
socket.onmessage = function (event) {
    const stream = JSON.parse(event.data)
    console.log(stream);
}
