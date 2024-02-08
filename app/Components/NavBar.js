import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <nav className='px-10 py-5 flex items-center justify-between'>
            <h1 className='text-3xl font-semibold'>TRANSLATION TOOL</h1>
            <ul className='flex items-center justify-between space-x-10'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/'}>About</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar