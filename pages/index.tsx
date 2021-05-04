import Head from 'next/head';
import { useEffect, useState } from 'react';
import DropdownButton from '../components/DropdownButton';


export default function Home() {
  const [message, setMessage] = useState('You are not logged in');

  useEffect(() => {
    (
      async () => {
        const response = await fetch('http://localhost:3000/api/user', {
          credentials: 'include',
        })

        const content = await response.json();

        setMessage(`Hi ${content.username}`)
      }
    )();
  });

  return (
    <>
      <Head>
        <title>My Project</title>
      </Head>
      <DropdownButton />
      <div>{message}</div>
    </>
  )
}
