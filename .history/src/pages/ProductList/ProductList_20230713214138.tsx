import AsideFilter from './AsideFilter'
import SortProductList from './SortProductList/SortProductList'

export default function ProductList() {
  return (
    <div className='bg-gray-200 py-6'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-3'>
            <AsideFilter />
          </div>
          <div className='col-span-9'>
            <SortProductList />
          </div>
        </div>
      </div>
    </div>
  )
}
