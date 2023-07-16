import AsideFilter from './AsideFilter'
import Product from './Product'
import SortProductList from './SortProductList/'

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
            <div className='gird cols-2 mt-6 grid gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
              {Array(30)
                .fill(0)
                .map((_, index) => ( <div className='col-span-1' key={index}></div>
                  <Product />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
