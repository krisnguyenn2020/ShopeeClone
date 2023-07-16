import React from 'react'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'

export default function AsideFilter() {
  return (
    <div className='py-4'>
      <Link to={path.home} className='flex items-center font-bold'>
        Home
      </Link>
    </div>
  )
}
