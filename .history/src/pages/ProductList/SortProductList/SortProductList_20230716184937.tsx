import React from 'react'

export default function SortProductList() {
  return (
    <div className='bg-gray-300/40 px-3 py-4'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex flex-wrap items-center gap-2'>
          <div>Sort by</div>
          <button className='h8 bg-orange px-4 capitalize'></button>
        </div>
      </div>
    </div>
  )
}
