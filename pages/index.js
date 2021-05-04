import Head from 'next/head';
import Link from 'next/link';
import DropdownRender from '../components/Dropdown';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Project</title>
      </Head>
      <DropdownRender />      
    </>
  )
}
