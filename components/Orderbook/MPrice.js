import React from 'react'

export default function MPrice({ price }) {
    return (
        <div className="rounded my-5 w-6/6 bg-gray-200 shadow-md text-center py-2">
            Current price: {price}
        </div>
    )
}