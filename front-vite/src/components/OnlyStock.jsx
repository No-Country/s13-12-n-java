import InfoCard from "./InfoCard";

export default function OnlyStock() {

    const cardsStock = [
        { icon: "inventory_2", title: "Total Productos", amount: 10000 },
        { icon: "local_shipping", title: "En camino", amount: 70 },
        { icon: "quick_reorder", title: "Ingresados", amount: 50 },
    ];

  return (
    <div className=" bg-dark-blue pt-2 pb-3 px-6 rounded-lg bg-opacity-75">
    <p className="text-xl text-left text-white">Stock</p>
    <div className="flex justify-between text-sm gap-2">
      {cardsStock.map((card) => (
        <InfoCard {...card} />
      ))}
    </div>
  </div>
  )
}
