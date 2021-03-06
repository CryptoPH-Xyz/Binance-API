import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';

export default function DropdownButton() {
    return (
        <div>
            <Dropdown className="relative inline-flex align-middle w-full">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="bg-gray-900 text-white text-l px-2 py-2 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
                Choose USDT pair
            </Dropdown.Toggle>

            <Dropdown.Menu className="flex flex-col mt-1">
                <Dropdown.Item className="text-sm py-1 px-4 w-full whitespace-nowrap bg-gray-200 hover:bg-gray-700 hover:text-white"><Link href='/BTCpage'>BTC/USDT</Link></Dropdown.Item>
                <Dropdown.Item className="text-sm py-1 px-4 w-full whitespace-nowrap bg-gray-200 hover:bg-gray-700 hover:text-white"><Link href='/ETHpage'>ETH/USDT</Link></Dropdown.Item>
                <Dropdown.Item className="text-sm py-1 px-4 w-full whitespace-nowrap bg-gray-200 hover:bg-gray-700 hover:text-white"><Link href='/DOGEpage'>DOGE/USDT</Link></Dropdown.Item>
                <Dropdown.Item className="text-sm py-1 px-4 w-full whitespace-nowrap bg-gray-200 hover:bg-gray-700 hover:text-white"><Link href='/BTCpage/socketpage'>WebSockets Test</Link></Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
