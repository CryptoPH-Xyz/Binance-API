
import React from 'react';
import Navbar from './Navbar';



export default function Layout({ children }) {
    return (
        <>
            <div>
                <Navbar />
                {children}
                <body>
                    <p>This does not follow margins from _app.js</p>
                </body>
            </div>
        </>
    )
}