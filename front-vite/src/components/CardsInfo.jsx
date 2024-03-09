import InfoCard from "./InfoCard";

export default function CardsInfo( {showSales, showStock, showShoppings}) {

  const cardsVentas = [
    { icon: "paid", title: "Ventas", amount: "$100000" },
    { icon: "show_chart", title: "Ganancia", amount: "$50000" },
    { icon: "sell", title: "Stock vendido", amount: "20%" },
  ];

  const cardsStock = [
    { icon: "inventory_2", title: "Total Productos", amount: 10000 },
    { icon: "local_shipping", title: "En camino", amount: 70 },
    { icon: "quick_reorder", title: "Ingresados", amount: 50 },
  ];

  const cardsCompras = [
    { icon: "shopping_cart", title: "Compras", amount: "$60000" },
    { icon: "inventory", title: "Órdenes", amount: 2 },
    { icon: "receipt_long", title: "Deudas", amount: "$20000" },
  ];

  return (
    <div className="flex flex-col">
      {/*Desktop version*/}
      <div className="hidden lg:flex lg:flex-col gap-4">
        <div className={`bg-dark-blue pt-2 pb-3 px-10 rounded-lg bg-opacity-75 ${showSales ? "block" : "hidden"}`}>
          <p className="text-xl text-left text-white">Ventas</p>
          <div className="flex justify-between text-sm">
            {cardsVentas.map((card, i) => (
              <InfoCard {...card} key={i}/>
            ))}
          </div>
        </div>
        <div className={`bg-dark-blue pt-2 pb-3 px-10 rounded-lg bg-opacity-75 ${showStock ? "block" : "hidden"}`}>
          <p className="text-xl text-left text-white">Stock</p>
          <div className="flex justify-between text-sm">
            {cardsStock.map((card, i) => (
              <InfoCard {...card} key={i} />
            ))}
          </div>
        </div>
        <div className={`bg-dark-blue pt-2 pb-3 px-10 rounded-lg bg-opacity-75 ${showShoppings ? "block" : "hidden"}`}>
          <p className="text-xl text-left text-white">Compras</p>
          <div className="flex justify-between text-sm">
            {cardsCompras.map((card, i) => (
              <InfoCard {...card} key={i}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
