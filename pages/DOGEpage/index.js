import React from 'react'
import Asks from '../../components/Orderbook/Asks'
import Bids from '../../components/Orderbook/Bids'

export default function DOGEpage({ orders }) {
    return (
        <>
          <h1>DOGE Coin</h1> 
          <div className ="flex">
                <div>
                    <Asks orders = {orders} />
                    <p>Market Price Here</p>
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
    const res = await fetch(`https://api.binance.com/api/v3/depth?symbol=DOGEUSDT&limit=10`)
    const orders = await res.json()

    return {
        props: { orders }
    }
}