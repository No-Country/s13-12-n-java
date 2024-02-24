import { FiBox, FiDollarSign } from "react-icons/fi";

function InfoCard({ Icon, title, amount }) {
  return (
    <div className="flex gap-2 items-center justify-center p-2 bg-light-blue text-white rounded-lg">
      <Icon className="text-3xl" />
      <div>
        <p>{title}</p>
        <p>${amount}</p>
      </div>
    </div>
  );
}

export default function CardsInfo() {
  const cardsMobile = [
    { Icon: FiBox, title: "Total Productos", amount: 10000 },
    { Icon: FiDollarSign, title: "Total Productos", amount: 10000 },
  ];

  const cardsVentas = [
    { Icon: FiBox, title: "Total Productos", amount: 10000 },
    { Icon: FiDollarSign, title: "Total Productos", amount: 10000 },
    { Icon: FiDollarSign, title: "Total Productos", amount: 10000 },
  ];

  const cardsStock = [
    { Icon: FiBox, title: "Total Productos", amount: 10000 },
    { Icon: FiDollarSign, title: "Total Productos", amount: 10000 },
    { Icon: FiBox, title: "Total Productos", amount: 10000 },
  ];

  const cardsCompras = [
    { Icon: FiBox, title: "Total Productos", amount: 10000 },
    { Icon: FiDollarSign, title: "Total Productos", amount: 10000 },
    { Icon: FiBox, title: "Total Productos", amount: 10000 },
  ];

  return (
    <div className="flex flex-col">
    <p className="text-2xl text-center md:text-left pb-4">HOY</p>
    {/*mobile version*/}
    <div className="flex md:hidden gap-6 w-full justify-center">
        {cardsMobile.map((card) => (
        <InfoCard {...card} />
        ))}
    </div>
    {/*Desktop version*/}
    <div className="hidden md:flex md:flex-col gap-2">
        <div className="bg-dark-blue p-4 rounded-lg">
        <p className="text-xl text-left text-white">Ventas</p>
        <div className="flex justify-between text-sm">
            {cardsVentas.map((card) => (
            <InfoCard {...card} />
            ))}
        </div>
        </div>
        <div className=" bg-dark-blue p-4 rounded-lg">
        <p className="text-xl text-left text-white">Stock</p>
        <div className="flex justify-between text-sm">
            {cardsStock.map((card) => (
            <InfoCard {...card} />
            ))}
        </div>
        </div>
        <div className="bg-dark-blue p-4 rounded-lg">
        <p className="text-xl text-left text-white">Compras</p>
        <div className="flex justify-between  text-sm">
            {cardsCompras.map((card) => (
            <InfoCard {...card} />
            ))}
        </div>
        </div>
    </div>
    </div>

  );
}

  
