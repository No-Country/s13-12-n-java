import React from 'react'
import CardsInfo from '../../components/CardsInfo'
import OrdersTable from '../../components/OrdersTable'
import Shortcuts from '../../components/Shortcuts'
import IndexPage from '../../components/ProductosLast'
import { useMediaQuery } from 'react-responsive'
import ProvidersTable from '../../components/ProvidersTable'

export default function Orders() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  return (
    <div className='grid grid-cols-3 xl:mt-5 '>
      <div className='xl:col-span-2'>
        <h1 className="text-center lg:text-left text-2xl mb-2.5">Pedidos</h1>
        <CardsInfo showSales={false} showStock={false} showShoppings={true}/>
        <OrdersTable/>
        <ProvidersTable/>
      </div>
      <div className="xl:col-span-1 flex flex-col items-center xl:mt-8">
          {!isMobile && (
            <div className="bg-semi-white flex flex-col w-80 items-center justify-center p-7 rounded-3xl">
              <h2 className="mb-6 text-2xl">Accesos Rápidos</h2>
              <div className="grid grid-cols-2 gap-6 gap-y-6">
                <Shortcuts label={"Crear Producto"} icon='add_business'></Shortcuts>
                <Shortcuts label={"Nueva Orden"} icon='note_add'></Shortcuts>
                <Shortcuts label={"Editar Producto"} icon='edit'></Shortcuts>
                <Shortcuts label={"Eliminar Proveedor"} icon='delete'></Shortcuts>
              </div>
            </div>
          )}
          <div className="mx-4">
            <IndexPage></IndexPage>
          </div>
        </div>
    </div>
  )
}
