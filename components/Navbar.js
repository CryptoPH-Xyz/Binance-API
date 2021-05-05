import React from 'react';
import Link from 'next/link';
import {useRouter} from "next/router";

export default function Navbar(props) {
    const router = useRouter();

    const logout = async () => {
        await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        })

        await router.push('/login');
    }

    let menu;

    if (!props.auth) {
        menu = (
        <>    
        <div className="py-4 px-8 bg-gray-900 text-white flex justify-between">
            <div className="text-xl hover:text-blue-500"><Link href='/'>Home</Link></div>
            <div className="flex">
                <div className="ml-5 text-s hover:text-blue-500"><Link href='/login'>Login</Link></div>
                <div className="ml-5 text-s hover:text-blue-500"><Link href='/register'>Register</Link></div>
            </div>
        </div>
        </>
        )
    } else {
        menu = (
            <div className="py-4 px-8 bg-gray-900 text-white flex justify-between">
            <div className="text-xl hover:text-blue-500"><Link href='/'>Orderbooks</Link></div>
            <div className="flex">
                <div className="ml-2 text-s hover:text-blue-500"><Link href='#' onClick={logout}>Logout</Link></div>
            </div>
        </div>
        )
    }

    return (
        <>
        <div>{menu}</div>
        </>
    )
}