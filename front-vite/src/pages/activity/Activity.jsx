import CompActivity from '../../components/CompActivity'

export default function Activity() {

  const actividades = [
    {
      venta: "Ventas",
      num: "12",
      prod: "Zapatillas deportivas",
      cliente: "Julia",
      time: "3",
      timeNum: "Dias",
    },
    {
      venta: "Ventas",
      num: "7",
      prod: "Mochilas",
      cliente: "Agustín",
      time: "12",
      timeNum: "Horas",
    },
    {
      venta: "Ventas",
      num: "5",
      prod: "Libros de cocina",
      cliente: "Mariana",
      time: "2",
      timeNum: "Dias",
    },
    {
      venta: "Ventas",
      num: "2",
      prod: "Auriculares inalámbricos",
      cliente: "Pedro",
      time: "1",
      timeNum: "Dia",
    },
    {
      venta: "Ventas",
      num: "15",
      prod: "Smartphones",
      cliente: "Sofía",
      time: "6",
      timeNum: "Horas",
    },
    {
      venta: "Ventas",
      num: "9",
      prod: "Bicicletas",
      cliente: "Martin",
      time: "5",
      timeNum: "Dias",
    },
    {
      venta: "Ventas",
      num: "4",
      prod: "Juguetes para niños",
      cliente: "Laura",
      time: "3",
      timeNum: "Horas",
    },
    {
      venta: "Ventas",
      num: "1",
      prod: "Cafetera eléctrica",
      cliente: "Tomas",
      time: "1",
      timeNum: "Dia",
    },
    {
      venta: "Ventas",
      num: "6",
      prod: "Vestidos",
      cliente: "Camila",
      time: "4",
      timeNum: "Dias",
    },
    {
      venta: "Ventas",
      num: "11",
      prod: "Relojes inteligentes",
      cliente: "Diego",
      time: "7",
      timeNum: "Horas",
    },
  ]
  

  return (
    <div className='flex justify-center lg:items-start items-center w-full flex-col gap-6 p-4'>
      <h1 className='text-3xl'>Actividad</h1>

     {actividades.map((card) => (
        <CompActivity {...card} />
      ))}
      
    </div>
  )
}
