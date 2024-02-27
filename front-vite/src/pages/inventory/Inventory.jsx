import ProductTable from "../../components/ProductTable";
import ProductTableRes from "../../components/ProductTableRes";
import ProductosLast from "../../components/ProductosLast";
import MediaQuery from "react-responsive";

const App = () => {
  const productos = [
    {
      nombre: "Producto 1",
      codigo: "#001",
      tipo: "Ropa",
      precio: 10,
      cantidad: 5,
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Warnweste_gelb.jpg/260px-Warnweste_gelb.jpg",
      isChecked: false,
    },
    {
      nombre: "Producto 2",
      codigo: "#002",
      tipo: "Ropa",
      precio: 15,
      cantidad: 3,
      imagen: "/images/isotipo.svg",
      isChecked: false,
    },
    {
      nombre: "Producto 3",
      codigo: "#003",
      tipo: "Ropa",
      precio: 15,
      cantidad: 4,
      imagen: "/images/isotipo.svg",
      isChecked: false,
    },
    {
      nombre: "Producto 4",
      codigo: "#004",
      tipo: "Ropa",
      precio: 15,
      cantidad: 7,
      imagen: "/images/isotipo.svg",
      isChecked: false,
    },
    {
      nombre: "Producto 5",
      codigo: "#005",
      tipo: "Ropa",
      precio: 15,
      cantidad: 13,
      imagen: "/images/isotipo.svg",
      isChecked: false,
    },
    {
      nombre: "Producto 6",
      codigo: "#006",
      tipo: "Ropa",
      precio: 15,
      cantidad: 10,
      imagen: "/images/isotipo.svg",
      isChecked: false,
    },
    {
      nombre: "Producto 7",
      codigo: "#007",
      tipo: "Ropa",
      precio: 15,
      cantidad: 0,
      imagen: "/images/isotipo.svg",
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
    {
      nombre: "Producto 9",
      codigo: "#009",
      tipo: "Ropa",
      precio: 15,
      cantidad: 30,
      imagen: "/images/isotipo.svg",
      isChecked: false,
    },
  ];

  return (
    <div className="flex items-center justify-center flex-wrap">
      <MediaQuery minWidth={768}>
        <section className="m-4">
        <h1 className="text-3xl">Inventario</h1>
        <ProductTable productos={productos} />
        </section>
      </MediaQuery>

      <MediaQuery maxWidth={767}>
        <h1 className="text-3xl">Lista de Productos</h1>
        <ProductTableRes productos={productos} />
      </MediaQuery>

      <ProductosLast />
    </div>
  );
};

export default App;
