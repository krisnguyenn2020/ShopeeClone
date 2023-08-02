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
              <div className='relative'></div>
            </div>
            <div className='col-span-7'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
