import React from 'react';
import Asks from '../../components/Orderbook/Asks';
import Bids from '../../components/Orderbook/Bids';
import Head from 'next/head';
import MPrice from '../../components/Orderbook/MPrice';
import DropdownButton from '../../components/DropdownButton';
import Layout from "../../components/Layout";

export default function ETHpage({ orders, price }) {

    return (
        <>
            <Head>
                <title>ETH/USDT</title>
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
//2nd div would be for charts

export const getServerSideProps = async () => {
    const res = await fetch(`https://api.binance.com/api/v3/depth?symbol=ETHUSDT`)
    const orders = await res.json()

    return {
        props: { orders }
    }
}