import React from 'react'

export default function SortProductList() {
  return (
    <div className='bg-gray-300/40 px-3 py-4'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex flex-wrap items-center gap-2'>
          <div>Sort by</div>
          <button className='h8 bg-orange px-4 text-center text-sm capitalize text-white hover:bg-orange/80'>
            Popular
          </button>{' '}
          <button className='h8 bg-white px-4 text-center text-sm capitalize text-black hover:bg-slate-100'>
            Newest
          </button>{' '}
          <button className='h8 bg-white px-4 text-center text-sm capitalize text-black hover:bg-slate-100'>
            Best Seller
          </button>
          <select className='h8 bg-white px-4 text-center text-sm capitalize text-black hover:bg-slate-100'>
            <option value='' disabled>
              Price
            </option>
            <option value='price:asc'>Price: lowest to highest</option>
            <option value='price:desc'>Price: lowest to highest</option>
          </select>
        </div>
      </div>
    </div>
  )
}
