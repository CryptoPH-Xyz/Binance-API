import Head from 'next/head';
import { useState } from 'react';
import DropdownButton from '../components/DropdownButton';
// import { chart } from '../components/Kline';

export default function Home() {
/*
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [message, setMessage] = useState<string>('You are not logged in')
*/
  return (
    <>
      <Head>
        <title>My Project</title>
      </Head>
      <DropdownButton />
    </>
  )
}
