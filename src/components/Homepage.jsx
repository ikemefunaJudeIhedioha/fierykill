import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
    return (
        <div className='h-screen w-full bg-orange-400 items-center flex flex-col justify-center gap-20 text-white px-16'>
            <h1 className='text-3xl font-semibold md:font-bold md:text-4xl lg:text-7xl text-center'>Welcome To Burham University Student Portal</h1>
            <Link to='/login' className='bg-white text-orange-400 px-4 py-3 text-xl md:text-2xl rounded-lg md:border md:rounded-2xl font-bold md:hover:animate-pulse transition-all duration-200 ease-in-out md:hover:text-white md:hover:border md:hover:bg-transparent'>Log In</Link>
        </div>
    )
}

export default Homepage