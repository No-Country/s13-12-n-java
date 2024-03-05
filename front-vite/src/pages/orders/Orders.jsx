import React from 'react'
import CardsInfo from '../../components/CardsInfo'
import OrdersTable from '../../components/OrdersTable'
import Shortcuts from '../../components/Shortcuts'
import IndexPage from '../../components/ProductosLast'
import { useMediaQuery } from 'react-responsive'
import ProvidersTable from '../../components/ProvidersTable'
import InfoCard from '../../components/InfoCard'
import Searchbar from '../../components/Searchbar'
import OrderComponent from '../../components/OrderComponent'

export default function Orders() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const cardsStock = [
    { icon: "shopping_cart", title: "Compras", amount: "$60000" },
    { icon: "inventory", title: "Órdenes", amount: 2 },
    { icon: "receipt_long", title: "Deudas", amount: "$20000" },
  ];
  const shortcutsIcons = ['add_business', 'note_add', 'edit', 'delete']
  let orders = [
    {number: 1, img: '/images/orders/1.jpg' },
    {number: 2, img: '/images/orders/2.jpg' },
    {number: 3, img: '/images/orders/3.jpg' },
    {number: 4, img: '/images/orders/4.jpg' },
  ]

  return (
    <div className='xl:grid xl:grid-cols-3 xl:mt-5 '>
      <div className='xl:col-span-2 flex flex-col items-center lg:items-stretch'>
        <h1 className="text-center lg:text-left text-2xl mb-2.5">Pedidos</h1>
        {!isMobile && <CardsInfo showSales={false} showStock={false} showShoppings={true}/>}
        <div className="carousel max-w-sm p-4 space-x-4 lg:hidden">
            {cardsStock.map((card) => (
              <div className="carousel-item" key={card.title}>
                <InfoCard {...card} />
              </div>
            ))}
        </div>
        <div className="flex justify-center mb-4">
          {isMobile && <Searchbar />}    
        </div>
        <div className="flex justify-center gap-4 mt-2 lg:hidden">
          {shortcutsIcons.map((icon) => (
            <button key={icon} className="bg-light-blue rounded-xl w-14 h-14 flex items-center justify-center">
              <span className="text-white material-symbols-rounded">{icon}</span>
            </button>
          ))}
        </div>
        <div className='w-full lg:hidden'>
          {orders.map((order) => (
            <OrderComponent number={order.number} img={order.img}/> 
          ))}
        </div>
        {!isMobile && <div>
          <OrdersTable/>
          <ProvidersTable/>
        </div>}
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
