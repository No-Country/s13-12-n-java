import React from 'react'

export default function ProvidersTable() {
  let providers = [
    { name: 'Samsung', email: 'samsung@gmail.com', number: "+54 9 11 1111-1111" },
    { name: 'TechVision', email: 'felicia.reid@example.com', number: "+54 9 11 2222-2222" },
    { name: 'Global Manufacturing', email: 'michelle.rivera@example.com', number: "+54 9 11 3333-3333" },
    { name: 'Swift Retailers', email: 'alma.lawson@example.com', number: "+54 9 11 4444-4444" },

  ]
  return (
    <div className='mt-4'>
        <details open className="">
            <summary className="hover:cursor-pointer bg-dark-blue py-2.5 pl-6 text-semi-white">Proveedores</summary>
            <div>
                <div className='grid grid-cols-4 grid-rows-1 justify-items-center gap-2 w-full font-semibold bg-blue h-10 text-semi-white items-center'>
                  <div>Empresa</div>
                  <div>Email</div>
                  <div>Teléfono</div>
                  <div></div>
                </div>
                <div className='grid gap-y-3 bg-semi-white auto-rows-auto overflow-y-auto py-2 h-40'>
                  {providers.map((provider) => (
                    <div className="grid grid-cols-4 justify-items-center items-center justify-start h-11" key={provider.name}>
                      <span>{provider.name}</span>
                      <span>{provider.email}</span>
                      <span>{provider.number}</span>
                      <button className="text-light-green text-sm">Ver detalles</button>
                    </div>
                ))}
                </div>
            </div>
        </details>
    </div>
  )
}
