'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (!storedUser) {
      router.push('/login');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">

      {user ? (
        <div className="w-[500px] bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 backdrop-blur-md">

          <div className="flex items-center gap-4">
            <img
              src={user.image}
              alt="profile"
              className="w-20 h-20 rounded-full border border-white/20"
            />

            <div>
              <h1 className="text-xl font-semibold">
                {user.firstName} {user.lastName}
              </h1>
              <p className="text-sm text-white/60">{user.email}</p>
              <p className="text-xs text-white/40">@{user.username}</p>
            </div>
          </div>

          <div className="my-5 border-t border-white/10"></div>

          <div>
            <h2 className="text-sm text-white/40 mb-2">Personal Info</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p><span className="text-white/50">Age:</span> {user.age}</p>
              <p><span className="text-white/50">Gender:</span> {user.gender}</p>
              <p><span className="text-white/50">Phone:</span> {user.phone}</p>
              <p><span className="text-white/50">Birth Date:</span> {user.birthDate}</p>
            </div>
          </div>

          <div className="my-5 border-t border-white/10"></div>

          {user.address && (
            <div>
              <h2 className="text-sm text-white/40 mb-2">Address</h2>
              <p className="text-sm text-white/80">
                {user.address.address}, {user.address.city}
              </p>
              <p className="text-sm text-white/60">
                {user.address.state}, {user.address.postalCode}
              </p>
            </div>
          )}

          <div className="my-5 border-t border-white/10"></div>

          {user.company && (
            <div>
              <h2 className="text-sm text-white/40 mb-2">Company</h2>
              <p className="text-sm text-white/80">{user.company.name}</p>
              <p className="text-sm text-white/60">{user.company.title}</p>
            </div>
          )}

        </div>
      ) : (
        <p>Loading...</p>
      )}

    </div>
  )
}

export default page