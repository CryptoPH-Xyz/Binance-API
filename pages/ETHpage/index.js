import React from 'react';
import Asks from '../../components/Orderbook/Asks';
import Bids from '../../components/Orderbook/Bids';
import Head from 'next/head';
import DropdownRender from '../../components/Dropdown';
import MPrice from '../../components/Orderbook/MPrice';

export default function ETHpage({ orders, price }) {

    return (
        <>
            <Head>
                <title>ETH/USDT</title>
            </Head>
            <DropdownRender />
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
//2nd div would be for charts

export const getServerSideProps = async () => {
    const res = await fetch(`https://api.binance.com/api/v3/depth?symbol=ETHUSDT`)
    const orders = await res.json()

    return {
        props: { orders }
    }
}