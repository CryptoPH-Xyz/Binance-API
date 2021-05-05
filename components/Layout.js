import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Layout(props) {

    const router = useRouter(); //redirects to login page

    //Makes user logout
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
        <div className="bg-gray-900 text-white flex justify-between">
                <div className="ml-2 text-s hover:text-blue-500"><Link href='/login'>Login</Link></div>
                <div className="ml-2 text-s hover:text-blue-500"><Link href='/register'>Register</Link></div>
        </div>
        )
    } else {
        menu = (
        <div className="bg-gray-900 text-white flex justify-between">
            <a href="#" className="ml-2 text-s hover:text-blue-500" onClick={logout}>Logout</a>
        </div>
        )
    }

    return (
        <>
            <div>
                <div className="py-4 px-8 bg-gray-900 text-white flex justify-between">
                    <div className="text-xl hover:text-blue-500"><Link href='/'>Home</Link></div>
                    <div>{menu}</div>
                </div>
                <main className="form-signin mx-auto mt-5 font-style">
                    {props.children}
                </main>
            </div>
        </>
    )
}