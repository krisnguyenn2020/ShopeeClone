import { useQuery } from '@tanstack/react-query'
import AsideFilter from './AsideFilter'
import Product from './Product'
import SortProductList from './SortProductList/'
import { get } from 'lodash'
import useQueryParams from 'src/hooks/useQueryParams'
import productApi from 'src/apis/product.api'

export default function ProductList() {
  const queryParams = useQueryParams()
  // console.log(queryParams)
  const { data } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => {
      return productApi.getProducts(queryParams)
    }
  })
  console.log(data)
  return (
    <div className='bg-gray-200 py-6'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-3'>
            <AsideFilter />
          </div>
          <div className='col-span-9'>
            <SortProductList />
            <div className='gird cols-2 mt-6 grid gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
              {data?.data.data.products.map((product) => (
                <div className='col-span-1' key={product._id}>
                  <Product />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
