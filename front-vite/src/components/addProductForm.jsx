import { useState } from 'react'
import { MdClose, MdFileUpload, MdCheck } from 'react-icons/md'
import { InputForm, TextAreaForm } from './FormComponents.jsx'

export default function AddProductForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [producto, setProducto] = useState('')
  const [categoria, setCategoria] = useState('')
  const [precio, setPrecio] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [cantidadMin, setCantidadMin] = useState('')
  const [descripcion, setDescripcion] = useState('')

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
        Añadir producto
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 z-40 inset-0 overflow-y-auto w-screen h-screen md:w-5/6 md:h-auto md:mx-auto md:px-10 md:my-12 md:rounded-lg md:shadow-lg bg-light-blue bg-opacity-95 py-3 px-4 text-white">
          <div className='flex justify-between items-center'>
            <p className='text-2xl'>Crear Producto</p>
            <button onClick={handleClose}>
              <MdClose size={24} className="text-white"/>
            </button>
          </div>
          <form className='flex flex-col md:grid md:grid-cols-2 gap-8 md:px-10 mt-6'>
            <div className='md:col-start-1 md:col-end-2'>
            <p className='text-xl'>Nuevo producto</p>
            <p className='text-base'>Ingrese la información para crear producto</p>
            </div>
            <button className='bg-black px-8 py-2 flex rounded-full mx-auto justify-center items-center font-bold'> 
            <MdFileUpload className="mr-2" size={24} />
            Subir Imagen
            </button>
            <InputForm label="Producto*" value={producto} setValue={setProducto} type="text" className="md:col-start-1 md:col-end-2"/>
            <InputForm label="Categoria*" value={categoria} setValue={setCategoria} type="datalist" />
            <InputForm label="Precio*" value={precio} setValue={setPrecio} type="number" className="md:col-start-1 md:col-end-2" />
            <InputForm label="Cantidad*" value={cantidad} setValue={setCantidad} type="number"  />
            <InputForm label="Cantidad mínima*" value={cantidadMin} setValue={setCantidadMin} type="number" className="md:col-start-1 md:col-end-2" />
            <TextAreaForm label="Descripción" value={descripcion} setValue={setDescripcion} type="text"  />
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



