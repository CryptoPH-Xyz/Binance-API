import React from 'react'

export default function login() {
    return (
        <>
            <main className="form-signin w-1/6 mx-auto mt-10 font-style">
                <form>
                <h1 className="h3 mb-3 text-xl text-center">Login to access Orderbooks</h1>

                <input type="username" className="form-control" placeholder="Username" required/>
                <input type="password" className="form-control" placeholder="Password" required/>
                <button className="px-4 btn btn-lg btn-primary bg-gray-900 text-white rounded hover:bg-blue-500" type="submit">Login</button>
                </form>
            </main>
        </>
    )
}