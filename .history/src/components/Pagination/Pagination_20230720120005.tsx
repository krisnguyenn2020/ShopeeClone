import React from 'react'

export default function Pagination() {
  return (
    <div className='mt-6 flex flex-wrap justify-center'>
      <button className='mx-2 cursor-pointer rounded bg-white px-3 py-2 shadow-sm'>Prev</button>
      <button className='mx-2 cursor-pointer rounded bg-white px-3 py-2 shadow-sm'>Next</button>
    </div>
  )
}
