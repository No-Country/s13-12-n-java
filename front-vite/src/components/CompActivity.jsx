import React from 'react'

export default function CompActivity({venta, num, prod, cliente, time, timeNum}) {
  return (
    <div className='flex flex-col items-start w-5/6 bg-white border-l-8 border-blue rounded-md p-3'>
        <p className='text-dark-gray'>🔵 {venta}</p>
        <div className='flex w-full lg:justify-between flex-col lg:flex-row'>
          <h1 className='max-w-md font-bold xl:max-w-none'>Se vendieron {num} articulos de {prod} al cliente {cliente}</h1>
          <p className='text-light-gray text-end'>Hace {time} {timeNum}</p>
        </div>
    </div>
  )
}
