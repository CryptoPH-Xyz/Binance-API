import React, { useEffect, useState } from 'react';
import Asks from '../../components/Orderbook/Asks';
import Bids from '../../components/Orderbook/Bids';
import Link from 'next/link';
import Head from 'next/head';
import MPrice from '../../components/Orderbook/MPrice';

export default function BTCpage({ orders, price }) {

    return (
        <>
            <Head>
                <title>BTC/USDT</title>
            </Head>
            <div className="flex">
                <div className="ml-8 text-l hover:text-blue-500"><Link href='/BTCpage'>BTC/USDT</Link></div>
                <div className="ml-8 text-l hover:text-blue-500"><Link href='/ETHpage'>ETH/USDT</Link></div>
                <div className="ml-8 text-l hover:text-blue-500"><Link href='/DOGEpage'>DOGE/USDT</Link></div>
                <div className="ml-8 text-l hover:text-blue-500"><Link href='/BTCpage/socketpage'>WebSocket</Link></div>
            </div>
            <div className ="flex">
                <div>
                    <Asks orders = {orders} />
                    <MPrice price = {price} />
                    <Bids orders = {orders} />
                </div>
            
                <div className ="ml-8">
                    <p>PLACE CHART HERE</p>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch(`https://api.binance.com/api/v3/depth?symbol=BTCUSDT`)
    const orders = await res.json()

    return {
        props: { orders }
    }
}
