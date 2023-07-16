import React from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <Link to='/'>
      <div className='hover:translate-y[-.0625rem] rounded-sm bg-white shadow duration-75'></div>
    </Link>
  )
}
