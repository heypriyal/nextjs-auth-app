'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = ({ user, handleLogout }) => {
  const router = useRouter();

  return (
    <div className='flex justify-between items-center px-6 py-3 border-b border-white/10 bg-black/60 backdrop-blur-md shadow-md'>

      <p className='text-lg text-white/80'>
        Welcome
        {user && (
          <span className='font-semibold text-white ml-2'>
            {user.firstName}
          </span>
        )}
      </p>

      <div className='flex gap-3'>

        <button
          className='px-3 py-1.5 text-sm rounded-md border border-white/20 bg-white/10 hover:bg-white/20 transition-all duration-200'
          onClick={() => router.push('/profile')}
        >
          Profile
        </button>

        <button
          className='px-3 py-1.5 text-sm rounded-md border border-red-400/30 bg-red-500/10 text-red-300 hover:bg-red-500/20 hover:border-red-400/50 transition-all duration-200'
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>
  )
}

export default Navbar