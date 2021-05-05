import React from 'react';
import Asks from '../../components/Orderbook/Asks';
import Bids from '../../components/Orderbook/Bids';
import Head from 'next/head';
import MPrice from '../../components/Orderbook/MPrice';
import DropdownButton from '../../components/DropdownButton';
import Layout from "../../components/Layout";

export default function DOGEpage({ orders, price }) {
    return (
        <>
        <Head>
            <title>DOGE/USDT</title>
        </Head>
        <Layout>
            <DropdownButton />
            <div className ="flex">
                <div>
                    <Asks orders = {orders} />
                    <MPrice price = {price} />
                    <Bids orders = {orders} />
                </div>
                
                <div className ="ml-8 w-4/6">
                    <p>PLACE CHART HERE</p>
                </div>
            </div>
            </Layout>
        </>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch(`https://api.binance.com/api/v3/depth?symbol=DOGEUSDT&limit=10`)
    const orders = await res.json()

    return {
        props: { orders }
    }
}

