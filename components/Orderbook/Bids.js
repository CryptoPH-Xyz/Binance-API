import React from 'react'

export default function Bids({orders}) {
    return (
        <>
            <table className="rounded my-5 w-2/6 bg-green-100 shadow-md">
                <th className="text-left border-b-2 border-green-500 px-1">Bid Price</th>
                <th className="text-center border-b-2 border-green-500">Qty</th>
                <th className="text-right border-b-2 border-green-500 px-1">Total Amount</th>
                <tbody>
                    <tr className="hover:bg-white rounded">
                        <td className ="text-left font-bold text-green-600 px-1">{orders.bids[0][0]}</td>
                        <td className = "text-center">{orders.bids[0][1]}</td>
                        <td className = "text-right font-bold text-green-600 px-1">{orders.bids[0][0]*(orders.bids[0][1])}</td>
                    </tr>
                    <tr className="hover:bg-white rounded">
                        <td className ="text-left font-bold text-green-600 px-1">{orders.bids[1][0]}</td>
                        <td className = "text-center">{orders.bids[1][1]}</td>
                        <td className = "text-right font-bold text-green-600 px-1">{orders.bids[1][0]*(orders.bids[1][1])}</td>
                    </tr>
                    <tr className="hover:bg-white rounded">
                        <td className ="text-left font-bold text-green-600 px-1">{orders.bids[2][0]}</td>
                        <td className = "text-center">{orders.bids[2][1]}</td>
                        <td className = "text-right font-bold text-green-600 px-1">{orders.bids[2][0]*(orders.bids[2][1])}</td>
                    </tr>
                    <tr className="hover:bg-white rounded">
                        <td className ="text-left font-bold text-green-600 px-1">{orders.bids[3][0]}</td>
                        <td className = "text-center">{orders.bids[3][1]}</td>
                        <td className = "text-right font-bold text-green-600 px-1">{orders.bids[3][0]*(orders.bids[3][1])}</td>
                    </tr>
                    <tr className="hover:bg-white rounded">
                        <td className ="text-left font-bold text-green-600 px-1">{orders.bids[4][0]}</td>
                        <td className = "text-center">{orders.bids[4][1]}</td>
                        <td className = "text-right font-bold text-green-600 px-1">{orders.bids[4][0]*(orders.bids[4][1])}</td>
                    </tr>
                    <tr className="hover:bg-white rounded">
                        <td className ="text-left font-bold text-green-600 px-1">{orders.bids[5][0]}</td>
                        <td className = "text-center">{orders.bids[5][1]}</td>
                        <td className = "text-right font-bold text-green-600 px-1">{orders.bids[5][0]*(orders.bids[5][1])}</td>
                    </tr>
                    <tr className="hover:bg-white rounded">
                        <td className ="text-left font-bold text-green-600 px-1">{orders.bids[6][0]}</td>
                        <td className = "text-center">{orders.bids[6][1]}</td>
                        <td className = "text-right font-bold text-green-600 px-1">{orders.bids[6][0]*(orders.bids[6][1])}</td>
                    </tr>
                    <tr className="hover:bg-white rounded">
                        <td className ="text-left font-bold text-green-600 px-1">{orders.bids[7][0]}</td>
                        <td className = "text-center">{orders.bids[7][1]}</td>
                        <td className = "text-right font-bold text-green-600 px-1">{orders.bids[7][0]*(orders.bids[7][1])}</td>
                    </tr>
                    <tr className="hover:bg-white rounded">
                        <td className ="text-left font-bold text-green-600 px-1">{orders.bids[8][0]}</td>
                        <td className = "text-center">{orders.bids[8][1]}</td>
                        <td className = "text-right font-bold text-green-600 px-1">{orders.bids[8][0]*(orders.bids[8][1])}</td>
                    </tr>
                    <tr className="hover:bg-white rounded">
                        <td className ="text-left font-bold text-green-600 px-1">{orders.bids[9][0]}</td>
                        <td className = "text-center">{orders.bids[9][1]}</td>
                        <td className = "text-right font-bold text-green-600 px-1">{orders.bids[9][0]*(orders.bids[9][1])}</td>
                    </tr>
                </tbody>
            </table> 
        </>
    )
}

//use {orders.bids[0][0]}, {orders.bids[0][1]} and {orders.bids[0][0] *(orders.bids[0][1])}
//make toFixed(2) work