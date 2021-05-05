import React, { SyntheticEvent, useState } from 'react';
import {useRouter} from 'next/router';
import Layout from '../components/Layout';

export default function login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();

    const submit = async (event: SyntheticEvent) => {
        event.preventDefault();

        await fetch('http://localhost:8000/api/login', {
            method: "POST",
            headers: {'Content-Type': "application/json" },
            credentials: 'include',
            body: JSON.stringify({
                username,
                password,
            })
        });

        await router.push('/BTCpage');
    }

    return (
        <Layout>
                <form onSubmit={submit} className="w-1/6 mx-auto">
                <h1 className="h3 mb-3 text-xl text-center">Login to access Orderbooks</h1>

                <input type="username" className="form-control" placeholder="Username" required
                    onChange={e => setUsername(e.target.value)}
                />
                <input type="password" className="form-control" placeholder="Password" required
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="px-4 btn btn-lg btn-primary bg-gray-900 text-white rounded hover:bg-blue-500" type="submit">Login</button>
                </form>
        </Layout>
    )
}
