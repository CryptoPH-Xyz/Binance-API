import React from 'react'

export default function Orderbook({ filteredOrders }) {
    return (
        <>
            {filteredOrders.map(order => {
                return (
                    <Orders 
                        asks={order.a}
                        bids={order.b}
                    />
                );
            })}
        </>
    );
}
