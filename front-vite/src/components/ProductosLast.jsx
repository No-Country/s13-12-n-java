
import Productos from '../components/LastMovements';

const IndexPage = () => {
  const productos = [
    {
      id: 1,
      imagen: 'https://via.placeholder.com/150',
      titulo: 'List Item',
      descripcion: 'Descripción del Producto 1',
    },
    {
      id: 2,
      imagen: 'https://via.placeholder.com/150',
      titulo: 'List Item',
      descripcion: 'Descripción del Producto 2',
    },
    {
      id: 3,
      imagen: 'https://via.placeholder.com/150',
      titulo: 'List Item',
      descripcion: 'Descripción del Producto 3',
    },
    {
        id: 4,
        imagen: 'https://via.placeholder.com/150',
        titulo: 'List Item',
        descripcion: 'Descripción del Producto 4',
      },
  ];

  return (
    <div className='cont-last-movements flex flex-col gap-5 m-8 w-80'>
      <h1 className='h1-title-last-movements text-center'>Últimos Movimientos</h1>
      {productos.map((producto, index) => (
        <Productos
          key={index}
          imagen={producto.imagen}
          titulo={producto.titulo}
          descripcion={producto.descripcion}
        />
      ))}
    </div>
  );
};

export default IndexPage;