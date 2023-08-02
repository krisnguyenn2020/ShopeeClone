import { useQuery } from '@tanstack/react-query'

import { useParams } from 'react-router-dom'
import productApi from 'src/apis/product.api'

export default function ProductDetails() {
  const { id } = useParams()
  console.log(id)
  const { data: productDetailData } = useQuery({
    queryKey: ['product', id],
    queryFn: () => {
      return productApi.getProductDetail(id as string)
    }
  })

  const product = productDetailData?.data.data
  console.log(product)
  return <div>Hello</div>
}
