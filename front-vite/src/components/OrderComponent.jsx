import React from 'react'

export default function OrderComponent({number, img}) {
  return (
    <div className='bg-white flex justify-between mx-6 my-5 rounded-xl shadow-md'>
        <div className='p-4'>
            <h3 className='font-semibold'>Orden #{number}</h3>
            <span className='text-sm'>Ver detalles</span>
        </div>
        <img src={img} alt="Product image preview" className='rounded-r-xl w-20 h-20' />
    </div>
  )
}
