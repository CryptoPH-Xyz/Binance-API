import React from 'react'
import Orderbook from '../../components/Orderbook'

export default function ETHpage({ orders }) {

    return (
        <>
          <h1>Ethereum</h1>
          <Orderbook orders = {orders}/> 
        </>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch(`https://api.binance.com/api/v3/depth?symbol=ETHUSDT`)
    const orders = await res.json()

    return {
        props: { orders }
    }
}