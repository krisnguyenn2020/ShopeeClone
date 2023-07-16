import React from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <Link to='/'>
      <div className='rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.0625rem] hover:shadow-md'>
        <div className='relative w-full pt-[100%]'>
          <img
            src='https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lgam0z1ap4w8a2'
            alt=''
            className='absolute left-0 top-0 h-full w-full bg-white object-cover'
          />
        </div>
        <div className='overflow-hidden p-2'>
          <div className='min-h-[1.75rem] text-sm line-clamp-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, architecto sed debitis tempore odio vel
            quaerat quis, quam error totam suscipit ab dolorum ex labore similique dolores earum maiores iste.
          </div>
          <div className='mt-3 flex items-center'>
            <div className='max-w-[50%] truncate text-gray-500 line-through'>
              <span className='ml-2 text-xs'>đ</span>
              <span>5.0000</span>
            </div>
            <div className='ml-1 truncate text-orange'>
              <span className='text-xs'>đ</span>
              <span>4.0000</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
