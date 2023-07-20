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
            <option value='price:desc'>Price: Highest to lowest</option>
          </select>
        </div>
        <div className='flex items-center'>
          <div>
            <span className='text-orange'>1</span>
            <span>/2</span>
          </div>
          <div className='ml-2'>
            <button className='h-8 cursor-not-allowed rounded-bl-sm rounded-tl-sm bg-white/60 px-3 hover:bg-slate-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-3 w-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
              </svg>
            </button>
            <button className='h-8 rounded-bl-sm rounded-tl-sm bg-white px-3 hover:bg-slate-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-3 w-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
