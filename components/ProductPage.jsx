import React from 'react'

const ProductPage = ({products,setPage,page}) => {
  return (
     <div>
      <div className='grid grid-cols-4 gap-6 p-6'>
        {products.map((item) => (
          <div
            key={item.id}
            className='bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-md hover:scale-102 transition-all'
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className='w-fit h-40 object-cover rounded-lg mb-3'
            />

            <h2 className='text-lg font-semibold'>{item.title}</h2>

            <p className='text-sm text-gray-300'>
              {item.description}
            </p>

            <div className='flex justify-between items-center mt-3'>
              <span className='font-bold text-green-400'>
                ${item.price}
              </span>

              <span className='text-yellow-400'>
                ⭐ {item.rating}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center items-center gap-4 mb-6'>
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
          className='px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50'
        >
          Prev
        </button>

        <span className='text-white'>Page {page}</span>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          className='px-4 py-2 bg-gray-700 text-white rounded'
        >
          Next
        </button>
      </div>
      </div>
  )
}

export default ProductPage
