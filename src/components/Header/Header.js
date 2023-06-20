import React from 'react';
import logo from '../../assets/images/logo.svg'

function Header() {
    return (
        <header className='flex flex-row justify-between'>
            <img src={logo} alt="logo" />

            <nav className='flex flex-row w-auto justify-between space-x-8 font-inter font-normal text-base text-very-dark-blue'>
                <button className='hover:text-soft-red'>Home</button>
                <button className='hover:text-soft-red'>New</button>
                <button className='hover:text-soft-red'>Popular</button>
                <button className='hover:text-soft-red'>Trending</button>
                <button className='hover:text-soft-red'>Categories</button>
            </nav>
        </header>
    )
}

export default Header