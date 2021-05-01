import React from 'react'
import Asks from '../../components/Orderbook/Asks'
import Bids from '../../components/Orderbook/Bids'

export default function BTCpage({ orders }) {
    //console.log(orders);
    return (
        <>
            <h1>Bitcoin</h1>
            <div className ="flex">
                <div>
                    <Asks orders = {orders} />
                    <p>Market Price is </p>
                    <Bids orders = {orders} />
                </div>
                <div className ="ml-10">
                    <Asks orders = {orders} />
                    <p>Market Price Here</p>
                    <Bids orders = {orders} />
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch(`https://api.binance.com/api/v3/depth?symbol=BTCUSDT`)
    
    const orders = await res.json()
    

    return {
        props:  { orders }
    }
}