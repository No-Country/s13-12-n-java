import React from 'react'
import Searchbar from './Searchbar';

export default function BoxInvent() {


  return (
    <div className='flex w-full justify-between'>
    <div className='w-36 text-xs bg-light-blue text-black rounded p-2 m-2 flex gap-4'>
        <img className='w-4' src="/images/box.svg" alt="Box-icon" />
        <div className='flex flex-col'>
            <p>Total Productos</p>
            <p>10.000</p>
        </div>
    </div>
    <div className='w-36 text-xs bg-light-blue text-black rounded p-2 m-2 flex gap-4'>
        <img className='w-4' src="/images/box.svg" alt="Box-icon" />
        <div className='flex flex-col'>
            <p>Total Productos</p>
            <p>10.000</p>
        </div>
    </div>
    </div>
  )
}
