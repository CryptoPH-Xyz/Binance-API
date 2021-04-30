import React from 'react'
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="py-4 px-8 bg-gray-900 text-white flex justify-between">
            <div className="text-xl"><Link href='/'>Home</Link></div>
            <div className="flex">
                <div className="ml-8 text-l"><Link href='/BTCpage'>BTC/USDT</Link></div>
                <div className="ml-8 text-l"><Link href='/ETHpage'>ETH/USDT</Link></div>
                <div className="ml-8 text-l"><Link href='/DOGEpage'>DOGE/USDT</Link></div>
            </div>
        </div>
    )
}