import React from 'react';

const Nav = () => {
  return (
    <nav className='bg-blue-900 text-white p-4'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                <img src='/engidea.png' alt='logo' className='w-40 h-10 mr-4' />
            </div>
            <div className='flex items-center'>
                <a href='/' className='mx-4 hover:text-gray-300'>Inicio</a>
                <a href='/login' className='mx-4 hover:text-gray-300'>Login</a>
                <a href='/registro' className='mx-4 hover:text-gray-300'>Registro</a>
            </div>
        </div>
    </nav>
  )
}

export default Nav