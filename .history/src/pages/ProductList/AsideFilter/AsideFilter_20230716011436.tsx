import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
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
              Phone
            </Link>
          </li>
        </ul>
        <Link to={path.home} className='mt-4 flex items-center font-bold uppercase'>
          <svg
            enableBackground='new 0 0 15 15'
            viewBox='0 0 15 15'
            x={0}
            y={0}
            className='h-4 w-3 fill-current stroke-current'
          >
            <g>
              <polyline
                fill='none'
                points='5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit={10}
              />
            </g>
          </svg>
          Search Filter
        </Link>
        <div className='my-4 h-[1px] bg-gray-300'></div>
        <div className='my-5'>
          <div>Price range</div>
          <form className='mt-2'>
            <div className='flex items-start'>
              <Input
                type='text'
                className='grow'
                placeholder='Min'
                name='form'
                classNameInput='w-full rounded-sm border border-gray-300 p-1 outline-none focus:border-gray-500 focus:shadow-sm'
              />
              <div className='mx-2 mt-2 shrink-0'>-</div>
              <Input
                type='text'
                className='grow'
                placeholder='Max'
                name='form'
                classNameInput='w-full rounded-sm border border-gray-300 p-1 outline-none focus:border-gray-500 focus:shadow-sm'
              />
            </div>
            <Button className='flex w-full items-center justify-end justify-center bg-orange p-2 text-sm uppercase text-white hover:bg-orange/80'>
              Apply
            </Button>
          </form>
        </div>
        <div className='my-4 h-[1px] bg-gray-300'></div>
        <div className='text-sm'>Rating</div>
        <ul className='my-3'>
          <li className='py-1 pl-2'>
            <Link to={path.home} className='flex items-center text-sm'>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <svg key={index} viewBox='0 0 15 15' x={0} y={0} className='h-4 w-3 fill-current stroke-current'>
                    <g>
                      <polyline
                        fill='none'
                        points='5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeMiterlimit={10}
                      />
                    </g>
                  </svg>
                ))}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
