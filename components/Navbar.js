import React from 'react'
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="py-4 px-8 bg-gray-900 text-white flex justify-between">
            <div className="text-xl hover:text-blue-500"><Link href='/'>Home</Link></div>
            <div className="flex">
                <div className="ml-2 text-s hover:text-blue-500"><Link href='/login'>Login</Link></div>
                <div className="ml-2 text-s hover:text-blue-500"><Link href='/register'>Register</Link></div>
                <div className="ml-2 text-s hover:text-blue-500"><Link href='/logout'>Logout</Link></div>
            </div>
        </div>
    )
}