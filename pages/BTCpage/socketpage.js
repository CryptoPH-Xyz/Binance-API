import React from 'react'
import Stream from '../../components/Orderbook/Stream';
import Head from 'next/head';
import DropdownRender from '../../components/Dropdown';

export default function socketpage({ stream }) {
        return (
            <>
                <Head>
                    <title>WebSocket</title>
                </Head>
                <DropdownRender />
                <Stream stream={stream}/>
                <div>
                    This page only streams data into console
                </div>

            </>
        )


}
/*
const socket = new WebSocket("wss://stream.binance.com:9443/stream?streams=btcusdt@depth/btcusdt@kline_5m");
socket.onmessage = function (event) {
    const stream = JSON.parse(event.data)
    console.log(stream);
}
*/
