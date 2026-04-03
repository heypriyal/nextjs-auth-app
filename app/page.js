'use client';

import Navbar from '@/components/Navbar';
import ProductPage from '@/components/ProductPage';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const page = () => {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(1);
  const limit = 8;



  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (!storedUser) {
      router.push('/login');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, []);



  useEffect(() => {
    async function fetchProducts() {
      const skip = (page - 1) * limit;

      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      const data = await res.json();
      setProducts(data.products);
    }
    fetchProducts();
  }, [page]);


  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <div className='flex flex-col'>

      <Navbar user={user} handleLogout={handleLogout} />
      
      <h1 className='text-center mt-4 font-bold text-xl'>All Products</h1>

      <ProductPage products={products} page={page} setPage={setPage} limit={limit}/>

    </div>
  );
};

export default page;