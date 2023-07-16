import React from 'react'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'

export default function AsideFilter() {
  return (
    <div className='py-4'>
      <Link to={path.home} className='flex items-center font-bold'>
        <svg viewBox='0 0 12 10' className='h4 mr-3 w-3 fill-current'>
          <g fillRule='evenodd' stroke='none' strokeWidth='1'>
            <g transform='translate(-373 -208)'>
              <g transform='translate(155 191)'>
                <g transform='translate(218 17)'>
                  <path d='m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z'></path>
                  <path d='m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z'></path>
                  <path d='m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z'></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        All Categories
      </Link>
      <div className='my-4 h-[1px] bg-gray-300'>
        <ul>
          <li className='p-2 pl-2'>
            <Link to={path.home} className='relative px-2 font-semibold text-orange'>
              <svg viewBox='0 0 4 7' className='absolute left-[-10px] top-1 h-2 w-2 fill-orange'>
                <polygon points='4 3.5 0 0 0 7' />
              </svg>
              Men Fashion
            </Link>
          </li>
          <li className='p-2 pl-2'>
            <Link to={path.home} className='relative px-2'>
              Women Fashion
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
