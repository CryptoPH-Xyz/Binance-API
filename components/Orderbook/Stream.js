import React from 'react';

export default function Stream({ stream }) {
    return (
        <>
            <table className="rounded my-5 w-2/6 bg-red-100 shadow-md">
                <th className="text-left border-b-2 border-red-500 px-1">Ask Price</th>
                <th className="text-center border-b-2 border-red-500">Qty</th>
                <th className="text-right border-b-2 border-red-500 px-1">Total Amount</th>
                <tbody>
                    <tr className="hover:bg-white rounded">
                        <td className ="text-left font-bold text-red-600 px-1">{stream}</td>
                        <td className = "text-center">Q1</td>
                        <td className = "text-right font-bold text-red-600 px-1">T1</td>
                    </tr>
                </tbody>
            </table>
            <table className="rounded my-5 w-2/6 bg-green-100 shadow-md">
                <th className="text-left border-b-2 border-green-500 px-1">Bid Price</th>
                <th className="text-center border-b-2 border-green-500">Qty</th>
                <th className="text-right border-b-2 border-green-500 px-1">Total Amount</th>
                <tbody>
                    <tr className="hover:bg-white rounded">
                        <td className ="text-left font-bold text-green-600 px-1">{stream}</td>
                        <td className = "text-center">Q1</td>
                        <td className = "text-right font-bold text-green-600 px-1">T1</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

//stream.b = bids
//stream.a = asks