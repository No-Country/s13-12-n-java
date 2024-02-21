import ProductTable from '../../components/ProductTable';

const productos = [
  { nombre: 'Producto 1', codigo: '001', tipo: 'Tipo 1', precio: 10, cantidad: 5, imagen: 'imagen1.jpg', isChecked: false },
  { nombre: 'Producto 2', codigo: '002', tipo: 'Tipo 2', precio: 15, cantidad: 3, imagen: 'imagen2.jpg',isChecked: false },
  { nombre: 'Producto 3', codigo: '003', tipo: 'Tipo 3', precio: 15, cantidad: 4, imagen: 'imagen3.jpg',isChecked: false },
  { nombre: 'Producto 4', codigo: '004', tipo: 'Tipo 4', precio: 15, cantidad: 7, imagen: 'imagen4.jpg',isChecked: false },
  { nombre: 'Producto 5', codigo: '005', tipo: 'Tipo 5', precio: 15, cantidad: 13, imagen: 'imagen5.jpg',isChecked: false },
  { nombre: 'Producto 6', codigo: '006', tipo: 'Tipo 6', precio: 15, cantidad: 10, imagen: 'imagen6.jpg',isChecked: false },
  { nombre: 'Producto 7', codigo: '007', tipo: 'Tipo 7', precio: 15, cantidad: 0, imagen: 'imagen7.jpg',isChecked: false },
  { nombre: 'Producto 8', codigo: '008', tipo: 'Tipo 8', precio: 15, cantidad: 2, imagen: 'imagen8.jpg',isChecked: false },
  { nombre: 'Producto 9', codigo: '009', tipo: 'Tipo 9', precio: 15, cantidad: 30, imagen: 'imagen9.jpg',isChecked: false },
];

const App = () => {
  return (
    <div className='m-4'>
      <h1 className='text-3xl'>Inventario</h1>
      <ProductTable productos={productos} />
    </div>
  );
};

export default App;