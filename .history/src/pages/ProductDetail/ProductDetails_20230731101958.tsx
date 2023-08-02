import { useQuery } from '@tanstack/react-query'

import { useParams } from 'react-router-dom'
import productApi from 'src/apis/product.api'

export default function ProductDetails() {
  const { nameId } = useParams()
  console.log(nameId)
  const { data: productDetailData } = useQuery({
    queryKey: ['product', nameId],
    queryFn: () => {
      return productApi.getProductDetail(id as string)
    }
  })

  const product = productDetailData?.data.data
  console.log(product)
  return <div>Hello</div>
}
