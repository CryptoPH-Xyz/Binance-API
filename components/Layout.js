import React from 'react';
import Navbar from './Navbar';

export default function Layout(props) {
    return (
        <>
            <div>
                <Navbar />
                {props.children}
            </div>
        </>
    )
}