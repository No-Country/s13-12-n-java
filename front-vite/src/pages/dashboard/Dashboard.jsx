import React from "react";
import IndexPage from "../../components/ProductosLast";
import { useMediaQuery } from "react-responsive";
import Shortcuts from "../../components/Shortcuts";
import CardsInfo from "../../components/CardsInfo";
import InfoCard from "../../components/InfoCard";
import Searchbar from "../../components/Searchbar";
import "../../App.css"

export default function Dashboard() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const cardsMobile = [
    { icon: "paid", title: "Ventas", amount: "$100000" },
    { icon: "show_chart", title: "Ganancia", amount: "$50000" },
    { icon: "sell", title: "Stock vendido", amount: "20%" },
    { icon: "inventory_2", title: "Total Productos", amount: 10000 },
    { icon: "local_shipping", title: "En camino", amount: 70 },
    { icon: "quick_reorder", title: "Ingresados", amount: 50 },
    { icon: "shopping_cart", title: "Compras", amount: "$60000" },
    { icon: "inventory", title: "Órdenes", amount: 2 },
    { icon: "receipt_long", title: "Deudas", amount: "$20000" },
  ];

  const shortcutsIcons = ['add_business', 'note_add', 'person_add', 'category']

  return (
      <div className="xl:grid xl:grid-cols-3  flex flex-col items-center overflow-hidden">
        <div className="xl:col-span-2 xl:mt-5">
          <h1 className="text-center lg:text-left text-2xl mb-2.5">Hoy</h1>
          <div className="carousel max-w-sm p-4 space-x-4 lg:hidden">
            {cardsMobile.map((card) => (
              <div className="carousel-item" key={card.title}>
                <InfoCard {...card} />
              </div>
            ))}
          </div>
          {!isMobile && <CardsInfo showSales={true} showStock={true} showShoppings={true}/>}
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
          <div className="flex justify-center items-center">
            <div className="bg-white h-64 my-6 w-96 md:w-full md:mx-10 lg:mr-12 lg:ml-2">GRÁFICO</div>
          </div>
        </div>
        <div className="xl:col-span-1 flex flex-col items-center xl:mt-8">
          {!isMobile && (
            <div className="bg-semi-white flex flex-col w-80 items-center justify-center p-7 rounded-3xl">
              <h2 className="mb-6 text-2xl">Accesos Rápidos</h2>
              <div className="grid grid-cols-2 gap-6 gap-y-6">
                <Shortcuts label={"Crear Producto"} icon='add_business'></Shortcuts>
                <Shortcuts label={"Nueva Orden"} icon='note_add'></Shortcuts>
                <Shortcuts label={"Nuevo Empleado"} icon='person_add'></Shortcuts>
                <Shortcuts label={"Nueva Categoría"} icon='category'></Shortcuts>
              </div>
            </div>
          )}
          <div className="mx-4">
            <IndexPage></IndexPage>
          </div>
        </div>
      </div>
  );
}