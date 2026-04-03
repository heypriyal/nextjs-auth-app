'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {

    const router = useRouter();
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState('')

    async function handleLogin(e) {
        e.preventDefault();
        
        try {
            seterror('')
            const response = await fetch('https://dummyjson.com/users');
           let data = await response.json()

           let user = data.users.find((e)=>e.username === username && e.password === password)
             
           if(!user){
            throw new Error('Invalid credentials')
           }
           localStorage.setItem('user',JSON.stringify(user))
                    router.push('/');
 
 
        } catch (err) {
            console.log(err)
            seterror(err.message)
        }

    }


    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <form onSubmit={handleLogin}
                className='bg-white/5 flex flex-col gap-5 items-center w-fit p-10 rounded border-2 border-white/10 shadow-sm sha shadow-white/10'>
                <h2 className='text-3xl font-bold text-white/70'>Login</h2>

                <input type='text' placeholder='write username' value={username} onChange={(e) => setusername(e.target.value)}
                    className='border-2 border-white/10 px-4 py-2 outline-none rounded text-xl' required
                />

                <input type='password' placeholder='write password' value={password} onChange={(e) => setpassword(e.target.value)}
                    className='border-2 border-white/10 px-4 py-2 outline-none rounded text-xl' required
                />

                <button className='bg-white/10 px-4 py-2 rounded text-xl hover:scale-95'>Submit</button>
                <p className='text-red-700 text-md'>{error}</p>
            </form>

        </div>
    )
}

export default page
