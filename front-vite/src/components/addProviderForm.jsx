import { useState } from 'react'
import { MdClose,  MdCheck } from 'react-icons/md'
import { InputForm, TextAreaForm, DatalistForm } from './FormComponents.jsx'

export default function AddProviderForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [nit, setNit] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [responsable, setResponsable] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  const [direccion, setDireccion] = useState('')

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
        Crear Proveedor
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 z-40 inset-0 overflow-y-auto w-screen h-screen md:w-5/6 md:h-5/6 md:mx-auto md:px-10 md:my-12 md:rounded-lg md:shadow-lg bg-light-blue bg-opacity-95 py-3 px-4 text-white">
          <div className='flex justify-between items-center'>
            <p className='text-2xl'>Crear Proveedor</p>
            <button onClick={handleClose}>
              <MdClose size={24} className="text-white"/>
            </button>
          </div>
          <form className='flex flex-col md:grid md:grid-cols-2 gap-5 md:px-10 mt-6'>
            <div className='md:col-start-1 md:col-end-2'>
            <p className='text-xl'>Nuevo proveedor</p>
            <p className='text-base'>Ingrese la información para crear proveedor</p>
            </div>
            <div> 
            </div>
            <InputForm label="CUIT/NIT*" value={nit} setValue={setNit} type="number" className="md:col-start-1 md:col-end-2" />
            <InputForm label="Empresa*" value={empresa} setValue={setEmpresa} type="text" />
            <InputForm label="Responsable*" value={responsable} setValue={setResponsable} type="text" className="md:col-start-1 md:col-end-2"/>
            <InputForm label="Telefono*" value={telefono} setValue={setTelefono} type="number"/>
            <InputForm label="Email*" value={email} setValue={setEmail} type="email" className="md:col-start-1 md:col-end-2"/>
            <TextAreaForm label="Dirección" value={direccion} setValue={setDireccion} type="text"  />
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