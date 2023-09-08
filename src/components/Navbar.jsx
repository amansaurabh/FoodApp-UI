import React from 'react'
import { logo } from '../assets'
import Button from './Button'

const Navbar = () => {
    return (
        <div className="w-full z-10 flex justify-between items-center absolute px-11 top-7 max-sm:justify-end max-sm:top-3 max-sm:px-1">
            <div className='max-md:hidden'>
                <img src={logo} alt="Logo" />
            </div>
            <Button
                label="Get in Touch"
                backgroundColor="bg-transparent"
                borderColor="border-white"
                textColor="text-white"
            />
        </div>
    )
}

export default Navbar
