import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';

export default function DropdownButton() {
    return (
        <div>
            <Dropdown className="relative inline-flex align-middle w-full mt-2">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="bg-gray-900 text-white text-l px-2 py-2 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                Choose USDT pair
            </Dropdown.Toggle>

            <Dropdown.Menu className="flex flex-col mt-4">
                <Dropdown.Item className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-gray-200 hover:bg-gray-700 hover:text-white"><Link href='/BTCpage'>BTC/USDT</Link></Dropdown.Item>
                <Dropdown.Item className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-gray-200 hover:bg-gray-700 hover:text-white"><Link href='/ETHpage'>ETH/USDT</Link></Dropdown.Item>
                <Dropdown.Item className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-gray-200 hover:bg-gray-700 hover:text-white"><Link href='/DOGEpage'>DOGE/USDT</Link></Dropdown.Item>
                <Dropdown.Item className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-gray-200 hover:bg-gray-700 hover:text-white"><Link href='/BTCpage/socketpage'>WebSockets Test</Link></Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
