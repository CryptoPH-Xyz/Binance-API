import React from 'react'

export default function StreamAsks({ stream }) {
    return (
        <>
            <table className="rounded my-5 w-2/6 bg-red-100 shadow-md">
                <th className="text-left border-b-2 border-red-500 px-1">Ask Price</th>
                <th className="text-center border-b-2 border-red-500">Qty</th>
                <th className="text-right border-b-2 border-red-500 px-1">Total Amount</th>
                <tbody>
                    <tr className="hover:bg-white rounded">
                        <td className ="text-left font-bold text-red-600 px-1">{stream.a[0][0]}</td>
                        <td className = "text-center">{stream.a[0][1]}</td>
                        <td className = "text-right font-bold text-red-600 px-1">{stream.a[0][0]*(stream.a[0][1])}</td>
                    </tr>
                </tbody>
            </table> 
        </>
    )
}

