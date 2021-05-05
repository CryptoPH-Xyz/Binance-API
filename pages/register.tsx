import React, { SyntheticEvent, useState } from 'react';
import {useRouter} from 'next/router';

export default function register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();

    const submit = async (event: SyntheticEvent) => {
        event.preventDefault();

        await fetch('http://localhost:8000/api/register', {
            method: "POST",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify({
                username,
                password
            })
        });

        await router.push('/login');
    }

    return (
        <>
            <main className="form-signin w-1/6 mx-auto mt-10 font-style">
                <form onSubmit={submit}>
                <h1 className="h3 mb-3 text-xl text-center">Please Register</h1>

                <input type="username" className="form-control" placeholder="Username" required
                    onChange={(event) => setUsername(event.target.value)}
                />
                <input type="password" className="form-control" placeholder="Password" required
                    onChange={(event) => setPassword(event.target.value)}
                />

                <button className="px-4 btn btn-lg btn-primary bg-gray-900 text-white rounded hover:bg-blue-500" type="submit">Submit</button>
                </form>
            </main>
        </>
    )
}

