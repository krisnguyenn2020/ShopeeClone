import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-neutral-100 py-16'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
          <div className='lg:col-span-1'>
            <div>© 2023 Shopee. All Rights Reserved.</div>
          </div>
          <div className='lg:col-span-2'>
            <div>
              Country & Region: Singapore Indonesia Taiwan Thailand Malaysia Vietnam Philippines Brazil México Colombia
              Chile
            </div>
          </div>
        </div>
        <div className='mt-10 text-center text-sm'>
          <div>Shopee Co., Ltd.</div>
          <div className='mt-6'>
            Address: Floors 4-5-6, Capital Place Building, 29 Lieu Giai Street, Ngoc Khanh Ward, Ba Dinh District, Hanoi
            City, Vietnam. Support hotline: 19001221 - Email: cskh@hotro.shopee.vn
          </div>
          <div className='mt-2'>Content Manager: Nguyen Duc Tri - Contact phone: 024 73081221 (ext 4678)</div>
          <div className='mt-2'>
            Business code: 0106773786 issued for the first time on 10/02/2015 by Hanoi Department of Planning &
            Investment
          </div>
          <div className='mt-2'>© 2015 - All rights reserved to Shopee Co., Ltd.</div>
        </div>
      </div>
    </footer>
  )
}
