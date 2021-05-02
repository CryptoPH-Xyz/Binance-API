import React from 'react';
import Link from 'next/link';

export default function socketpage() {
    return (
        <>
            <div className="flex">
                <div className="ml-8 text-l hover:text-blue-500"><Link href='/BTCpage'>BTC/USDT</Link></div>
                <div className="ml-8 text-l hover:text-blue-500"><Link href='/ETHpage'>ETH/USDT</Link></div>
                <div className="ml-8 text-l hover:text-blue-500"><Link href='/DOGEpage'>DOGE/USDT</Link></div>
                <div className="ml-8 text-l hover:text-blue-500"><Link href='/BTCpage/socketpage'>BTCSocket</Link></div>
            </div>
            <h1>Sockets</h1>
        </>
    )
}


/*
import React from 'react';
import Link from 'next/link';
import StreamAsks from '../../components/Orderbook/StreamAsks';
import { createSocket } from 'node:dgram';


export default function BTCpage({ stream }) {

        return (
            <>
                <div>
                    <orderbook />
                </div>
                <div className="flex">
                    <div className="ml-8 text-l hover:text-blue-500"><Link href='/BTCpage'>BTC/USDT</Link></div>
                    <div className="ml-8 text-l hover:text-blue-500"><Link href='/ETHpage'>ETH/USDT</Link></div>
                    <div className="ml-8 text-l hover:text-blue-500"><Link href='/DOGEpage'>DOGE/USDT</Link></div>
                </div>
                <div className ="flex">
                    <StreamAsks stream = {stream} />
                </div>
            </>
        )
}

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
export const socket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@depth");
socket.onmessage = async function (event) {

    const stream = await JSON.parse(event.data) //converts string data to object
    
    return {
        props: { stream }
    }

}
*/

/*
export const getServerSideProps = async () => {
    const res = await fetch(`https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=10`)
    
    const orders = await res.json()
    
    return {
        props:  { orders }
    }
}
*/