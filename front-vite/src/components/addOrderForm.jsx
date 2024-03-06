import { useState } from 'react'
import { MdClose,  MdCheck } from 'react-icons/md'
import { InputForm, TextAreaForm, DatalistForm } from './FormComponents.jsx'

export default function AddOrderForm() {
    const [isOpen, setIsOpen] = useState(false)
    const [producto, setProducto] = useState('')
    const [categoria, setCategoria] = useState('')
    const [precio, setPrecio] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [responsable, setResponsable] = useState('')
    const [observacion, setObservacion] = useState('')

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button
        className="bg-blue text-white active:bg-light-blue font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={handleOpen}
      >
        Crear Pedido
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 z-40 inset-0 overflow-y-auto w-screen h-screen md:w-5/6 md:h-5/6 md:mx-auto md:px-10 md:my-12 md:rounded-lg md:shadow-lg bg-light-blue bg-opacity-95 py-3 px-4 text-white">
          <div className='flex justify-between items-center'>
            <p className='text-2xl'>Crear Pedido</p>
            <button onClick={handleClose}>
              <MdClose size={24} className="text-white"/>
            </button>
          </div>
          <form className='flex flex-col md:grid md:grid-cols-2 gap-5 md:px-10 mt-6'>
            <div className='md:col-start-1 md:col-end-2'>
            <p className='text-xl'>Nuevo pedido</p>
            <p className='text-base'>Ingrese la información para crear pedido</p>
            </div>
            <div> 
            </div>
            <InputForm label="Producto*" value={producto} setValue={setProducto} type="text" className="md:col-start-1 md:col-end-2"/>
            <DatalistForm label="Categoría*" value={categoria} setValue={setCategoria} options={["Categoría 1", "Categoría 2", "Categoría 3"]} />
            <InputForm label="Precio*" value={precio} setValue={setPrecio} type="number" className="md:col-start-1 md:col-end-2" />
            <InputForm label="Cantidad*" value={cantidad} setValue={setCantidad} type="number"  />
            <InputForm label="Empresa Solicitante / Responsable*" value={responsable} setValue={setResponsable} type="text" className="md:col-start-1 md:col-end-2" />
            <TextAreaForm label="Observaciones" value={observacion} setValue={setObservacion} type="text"  />
            <div className='flex justify-around font-medium md:col-start-1 md:col-end-2 md:justify-start md:gap-6'>
              <button className='bg-blue py-2 px-4 rounded-full'>Cancelar</button>
              <button type='submit' className='flex bg-black py-2 px-4 rounded-full'><MdCheck size={24} className='mr-2'/>Guardar</button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}