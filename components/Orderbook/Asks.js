import React from 'react'

export default function Asks({ orders }) {
    return (
        <>
            <table className="rounded my-5 w-2/6 bg-red-100 shadow-md">
                <th className="text-left border-b-2 border-red-500 px-1">Ask Price</th>
                <th className="text-center border-b-2 border-red-500">Qty</th>
                <th className="text-right border-b-2 border-red-500 px-1">Total Amount</th>
                <tbody>
                    <tr className="hover:bg-white rounded">
                        <td className ="text-left font-bold text-red-600 px-1">{orders.asks[9][0]}</td>
                        <td className = "text-center">{orders.asks[9][1]}</td>
                        <td className = "text-right font-bold text-red-600 px-1">{orders.asks[9][0]*(orders.asks[9][1])}</td>
                    </tr>
                    <tr className="hover:bg-white rounded">
                        <td className ="text-left font-bold text-red-600 px-1">{orders.asks[8][0]}</td>
                        <td className = "text-center">{orders.asks[8][1]}</td>
                        <td className = "text-right font-bold text-red-600 px-1">{orders.asks[8][0]*(orders.asks[8][1])}</td>
                    </tr>
                    <tr className="hover:bg-white rounded">
                        <td className ="text-left font-bold text-red-600 px-1">{orders.asks[7][0]}</td>
                        <td className = "text-center">{orders.asks[7][1]}</td>
                        <td className = "text-right font-bold text-red-600 px-1">{orders.asks[7][0]*(orders.asks[7][1])}</td>
                    </tr>
                    <tr className="hover:bg-white rounded">
                        <td className ="text-left font-bold text-red-600 px-1">{orders.asks[6][0]}</td>
                        <td className = "text-center">{orders.asks[6][1]}</td>
                        <td className = "text-right font-bold text-red-600 px-1">{orders.asks[6][0]*(orders.asks[6][1])}</td>
                    </tr>
                    <tr className="hover:bg-white rounded">
                        <td className ="text-left font-bold text-red-600 px-1">{orders.asks[5][0]}</td>
                        <td className = "text-center">{orders.asks[5][1]}</td>
                        <td className = "text-right font-bold text-red-600 px-1">{orders.asks[5][0]*(orders.asks[5][1])}</td>
                    </tr>
                    <tr className="hover:bg-white rounded">
                        <td className ="text-left font-bold text-red-600 px-1">{orders.asks[4][0]}</td>
                        <td className = "text-center">{orders.asks[4][1]}</td>
                        <td className = "text-right font-bold text-red-600 px-1">{orders.asks[4][0]*(orders.asks[4][1])}</td>
                    </tr>
                    <tr className="hover:bg-white rounded">
                        <td className ="text-left font-bold text-red-600 px-1">{orders.asks[3][0]}</td>
                        <td className = "text-center">{orders.asks[3][1]}</td>
                        <td className = "text-right font-bold text-red-600 px-1">{orders.asks[3][0]*(orders.asks[3][1])}</td>
                    </tr>
                    <tr className="hover:bg-white rounded">
                        <td className ="text-left font-bold text-red-600 px-1">{orders.asks[2][0]}</td>
                        <td className = "text-center">{orders.asks[2][1]}</td>
                        <td className = "text-right font-bold text-red-600 px-1">{orders.asks[2][0]*(orders.asks[2][1])}</td>
                    </tr>
                    <tr className="hover:bg-white rounded">
                        <td className ="text-left font-bold text-red-600 px-1">{orders.asks[1][0]}</td>
                        <td className = "text-center">{orders.asks[1][1]}</td>
                        <td className = "text-right font-bold text-red-600 px-1">{orders.asks[1][0]*(orders.asks[1][1])}</td>
                    </tr>
                    <tr className="hover:bg-white rounded">
                        <td className ="text-left font-bold text-red-600 px-1">{orders.asks[0][0]}</td>
                        <td className = "text-center">{orders.asks[0][1]}</td>
                        <td className = "text-right font-bold text-red-600 px-1">{orders.asks[0][0]*(orders.asks[0][1])}</td>
                    </tr>
                </tbody>
            </table> 
        </>
    )
}
