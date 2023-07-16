import React from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <Link to='/'>
      <div className='rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.625rem] hover:shadow-md'>
        <div className='relative w-full pt-[100%]'></div>
      </div>
    </Link>
  )
}
