import { useQuery } from '@tanstack/react-query'

import { useParams } from 'react-router-dom'
import productApi from 'src/apis/product.api'

export default function ProductDetails() {
  const { nameId } = useParams()
  console.log(nameId)
  const { data: productDetailData } = useQuery({
    queryKey: ['product', nameId],
    queryFn: () => {
      return productApi.getProductDetail(nameId as string)
    }
  })

  const product = productDetailData?.data.data
  if (!product) return null
  console.log(product)
  return (
    <div className='bg-gray-200 py-6'>
      <div className='bg-white p-4 shadow'>
        <div className='container'>
          <div className='grid grid-cols-12 gap-9'>
            <div className='col-span-5'>
              <div className='relative w-full pt-[100%] shadow'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='absolute left-0 top-0 h-full w-full object-cover'
                />
              </div>
              <div className='relative mt-4 grid grid-cols-5 gap-1'>
                <button className='absolute left-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-5 w-5'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                  </svg>
                </button>
                {product.images.splice(0, 5).map((img, index) => {
                  return (
                    <div className='relative w-full pt-[100%]' key={img}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className='absolute left-0 top-0 h-full w-full object-cover'
                      />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='col-span-7'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
