import React from 'react'

export default function ProductRating() {
  return (
    <div className='flex items-center'>
      <div className='relative'>
        <div className='absolute left-0 top-0 h-full overflow-hidden' style={{ width: '50%' }}>
          <svg
            enableBackground='new 0 0 15 15'
            viewBox='0 0 15 15'
            x={0}
            y={0}
            className='h-3 w-3 fill-yellow-300 text-yellow-300'
          >
            <polygon
              points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeMiterlimit={10}
            />
          </svg>
        </div>
        <svg
          enableBackground='new 0 0 15 15'
          viewBox='0 0 15 15'
          x={0}
          y={0}
          className='h-3 w-3 fill-current text-gray-400'
        >
          <polygon
            points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeMiterlimit={10}
          />
        </svg>
      </div>
    </div>
  )
}
