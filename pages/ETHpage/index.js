import React from 'react';
import Asks from '../../components/Orderbook/Asks';
import Bids from '../../components/Orderbook/Bids';
import Link from 'next/link';

export default function ETHpage({ orders }) {

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
                    <p>Market Price Here</p>
                    <Bids orders = {orders} />
                </div>
            
                <div className ="ml-10">
                    <Asks orders = {orders} />
                    <p>PLACE CHART HERE</p>
                    <Bids orders = {orders} />
                </div>
            </div>
        </>
    )
}
//2nd div would be for charts

export const getServerSideProps = async () => {
    const res = await fetch(`https://api.binance.com/api/v3/depth?symbol=ETHUSDT`)
    const orders = await res.json()

    return {
        props: { orders }
    }
}