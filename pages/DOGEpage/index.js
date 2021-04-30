import React from 'react'
import Orderbook from '../../components/Orderbook'

export default function DOGEpage({ orders }) {
    return (
        <>
          <h1>DOGE Coin</h1> 
          <Orderbook orders={orders} /> 
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