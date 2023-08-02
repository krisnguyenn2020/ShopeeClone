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
  console.log(product)
  return <div className='bg-gray-200 py-6'></div>
}
