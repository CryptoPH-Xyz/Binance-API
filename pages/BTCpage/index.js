import React from 'react';
import Asks from '../../components/Orderbook/Asks';
import Bids from '../../components/Orderbook/Bids';
import Link from 'next/link';

export default function BTCpage({ orders }) {
    const socket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@depth");

    socket.onmessage = function (event) {
        console.log(event.data);
    }
    return (
        <>
            <div className="flex">
                <div className="ml-8 text-l hover:text-blue-500"><Link href='/BTCpage'>BTC/USDT</Link></div>
                <div className="ml-8 text-l hover:text-blue-500"><Link href='/ETHpage'>ETH/USDT</Link></div>
                <div className="ml-8 text-l hover:text-blue-500"><Link href='/DOGEpage'>DOGE/USDT</Link></div>
            </div>
            <div className ="flex">
                <div>
                    <Asks orders = {orders} />
                    <p>Market Price is </p>
                    <Bids orders = {orders} />
                </div>
                <div className ="ml-8">
                    <Asks orders = {orders} />
                    <p>PLACE CHART HERE</p>
                    <Bids orders = {orders} />
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch(`https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=10`)
    
    const orders = await res.json()
    

    return {
        props:  { orders }
    }
}