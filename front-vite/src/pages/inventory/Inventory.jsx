import ProductTable from "../../components/ProductTable";
import ProductTableRes from "../../components/ProductTableRes";
import MediaQuery from "react-responsive";
import AcessFast from "../../components/AcessFast";
import OnlyStock from "../../components/OnlyStock";
import InventSearch from "../../components/InventSearch";
import "./inventory.css"

const App = () => {
  const productos = [
    {
      nombre: "Producto 1",
      codigo: "#001",
      tipo: "Ropa",
      precio: 10,
      cantidad: 5,
      imagen: "/images/ropa/image1.svg",
      isChecked: false,
    },
    {
      nombre: "Producto 2",
      codigo: "#002",
      tipo: "Ropa",
      precio: 15,
      cantidad: 3,
      imagen: "/images/ropa/image2.svg",
      isChecked: false,
    },
    {
      nombre: "Producto 3",
      codigo: "#003",
      tipo: "Ropa",
      precio: 15,
      cantidad: 4,
      imagen: "/images/ropa/image3.svg",
      isChecked: false,
    },
    {
      nombre: "Producto 4",
      codigo: "#004",
      tipo: "Ropa",
      precio: 15,
      cantidad: 7,
      imagen: "/images/ropa/image4.svg",
      isChecked: false,
    },
    {
      nombre: "Producto 5",
      codigo: "#005",
      tipo: "Ropa",
      precio: 15,
      cantidad: 13,
      imagen: "/images/ropa/image5.svg",
      isChecked: false,
    },
    {
      nombre: "Producto 6",
      codigo: "#006",
      tipo: "Ropa",
      precio: 15,
      cantidad: 10,
      imagen: "/images/ropa/image6.svg",
      isChecked: false,
    },
    {
      nombre: "Producto 7",
      codigo: "#007",
      tipo: "Ropa",
      precio: 15,
      cantidad: 0,
      imagen: "/images/ropa/image7.svg",
      isChecked: false,
    },
    {
      nombre: "Producto 8",
      codigo: "#008",
      tipo: "Ropa",
      precio: 15,
      cantidad: 2,
      imagen: "/images/isotipo.svg",
      isChecked: false,
    },
    // {
    //   nombre: "Producto 9",
    //   codigo: "#009",
    //   tipo: "Ropa",
    //   precio: 15,
    //   cantidad: 30,
    //   imagen: "/images/isotipo.svg",
    //   isChecked: false,
    // },
  ];

  return (
    <div className="flex flex-wrap sm:flex sm:items-center sm:justify-around invent-media">
      
      <MediaQuery minWidth={768}>
        <section className="flex justify-center items-center flex-col px-4">
          <h1 className="text-3xl">Inventario</h1>
          <OnlyStock/>
          <ProductTable productos={productos} />
        </section>
      </MediaQuery>

      <MediaQuery maxWidth={767}>
        <h1 className="text-3xl z-20">Inventario</h1>
        <InventSearch/>
        <h1 className="text-3xl w-full px-2 z-20">Lista de Productos</h1>
        <ProductTableRes productos={productos} />
      </MediaQuery>

      <AcessFast />

    </div>
  );
};

export default App;