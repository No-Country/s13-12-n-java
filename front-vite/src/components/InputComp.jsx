import React from 'react'

export default function InputComp({ min, type, id, onChange, value, label, placeholder, required, name }) {
  return (
    <div className='flex flex-col mx-5'>
        <label className='' htmlFor={id}>{label}</label>
        <input className='bg-transparent border-b py-1 mb-3 border-b-black placeholder:text-black placeholder:text-sm' 
            type={type} 
            id={id} 
            onChange={onChange} 
            value={value} 
            placeholder={placeholder}
            minLength={min}
            required={required}
            name={name}
        ></input>
    </div>
  )
}