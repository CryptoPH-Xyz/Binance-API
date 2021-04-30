import React from 'react'
import Orderbook from '../../components/Orderbook'

export default function BTCpage({ orders }) {
    //console.log(orders);
    return (
        <>
            <h1>Bitcoin</h1>
            <Orderbook orders = {orders}/>
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