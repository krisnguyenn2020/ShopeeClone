import React from 'react'
import { Link } from 'react-router-dom'
import { Product as ProductType } from 'src/types/product.type'
import { formatNumberToSocialStyle, formatCurrency } from 'src/utils/utils'

interface Props {
  product: ProductType
}
export default function Product({ product }: Props) {
  const sold = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 2 }).format(product.sold)
  const price = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(product.price)
  return (
    <Link to='/'>
      <div className='overflow-hidden rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.0425rem] hover:shadow-md'>
        <div className='relative w-full pt-[100%]'>
          <img
            src={product.image}
            alt={product.name}
            className='absolute left-0 top-0 h-full w-full bg-white object-cover'
          />
        </div>
        <div className='overflow-hidden p-2'>
          <div className='min-h-[2rem] text-sm text-xs line-clamp-2'>{product.name}</div>
          <div className='mt-3 flex items-center'>
            <div className='max-w-[50%] truncate text-gray-500 line-through'>
              <span className=' text-xs'>đ</span>
              <span className=''>{formatCurrency(product.price_before_discount)}</span>
            </div>
            <div className='ml-1 truncate text-orange'>
              <span className='text-xs'>đ</span>
              <span>{formatCurrency(product.price)}</span>
            </div>
          </div>
          <div className='mt-3 flex items-center justify-end'>
            <div className='flex items-center'></div>
            <div className='ml-2 text-sm'>
              <span>{formatNumberToSocialStyle(product.sold)}</span>
              <span className='ml-1'>Sold</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
