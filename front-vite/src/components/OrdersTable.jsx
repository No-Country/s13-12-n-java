import React from "react";
import "../App.css"

export default function OrdersTable() {
    let orders = [
        { check: false, provider: 'Samsung', orderNumber: 1, date: '14/02/24', price: 1000 },
        { check: false, provider: 'Samsung', orderNumber: 2, date: '14/02/24', price: 1000 },
        { check: false, provider: 'Samsung', orderNumber: 3, date: '14/02/24', price: 1000 },
        { check: false, provider: 'Samsung', orderNumber: 4, date: '14/02/24', price: 1000 },
        { check: false, provider: 'Samsung', orderNumber: 5, date: '14/02/24', price: 1000 },
        { check: false, provider: 'Samsung', orderNumber: 6, date: '14/02/24', price: 1000 },
        { check: false, provider: 'Samsung', orderNumber: 7, date: '14/02/24', price: 1000 },
        { check: false, provider: 'Samsung', orderNumber: 8, date: '14/02/24', price: 1000 },
    ];

  return (
    <div className="">
      <div className="grid grid-cols-6 grid-rows-1 justify-items-center gap-2 w-full mt-6 font-semibold bg-dark-blue h-10 text-semi-white items-center">
        <input type="checkbox" disabled className="justify-self-start ml-6"/>
        <div>Proveedor</div>
        <div>N° Orden</div>
        <div>Fecha</div>
        <div>Precio</div>
      </div>
      <div className="grid gap-y-2 bg-semi-white auto-rows-auto overflow-y-auto py-2 h-56">
        {orders.map((order) => (
          <div className="grid grid-cols-6 justify-items-center items-center h-11" key={order.orderNumber}>
              <input type="checkbox" className="justify-self-start ml-6" />
              <span>{order.provider}</span>
              <span>{order.orderNumber}</span>
              <span>{order.date}</span>
              <span>{order.price}</span>
              <button className="text-light-green text-sm">Ver detalles</button>
          </div>
        ))}
      </div>
    </div>
    
    
  );
}
