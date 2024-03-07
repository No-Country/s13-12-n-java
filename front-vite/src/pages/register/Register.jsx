import React from 'react'
import InputComp from '../../components/InputComp'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="bg-[url('/images/backgrounds/register-mob.png')] xl:bg-[url('/images/backgrounds/register-desk.jpg')] bg-cover h-screen w-screen bg-no-repeat flex items-center justify-center">
        <div className='bg-gradient-to-tl from-light-blue to-semi-white w-10/12 xl:w-1/2 rounded-3xl py-6'>
            <h1 className='text-3xl text-center'>Bienvenido</h1>
            <h3 className='text-center text-sm mb-2'>Por favor, ingrese sus datos</h3>
            <form action="">
                <InputComp type="text" id="name" placeholder="Nombre" required={true} label="" />
                <InputComp type="text" id="lastname" placeholder="Apellido" required={true} label=""/>
                <div className='flex mx-5 text-sm justify-between'>
                    <select className='bg-transparent border-b py-1 mb-3' placeholder="Rol">
                        <option value="" disabled className=''>Rol</option>
                        <option value="0">Vendedor</option>
                        <option value="1">Empleado</option>
                    </select>
                    <select className='bg-transparent border-b py-1 mb-3' placeholder="País">
                        <option value="" disabled>País</option>
                        <option value="1">Argentina</option>
                        <option value="2">Chile</option>
                        <option value="3">Brasil</option>
                        <option value="4">Uruguay</option>
                        <option value="5">Paraguay</option>
                        <option value="6">Bolivia</option>
                    </select>
                </div>
                <InputComp type="email" id="email" placeholder="email@atlantisinventory.com" required={true}/>
                <InputComp type="password" id="password" placeholder="Ingrese una contraseña" required={true}/>
                <InputComp type="password" id="repeatPassword" placeholder="Repita la contraseña" required={true}/>
                <div className='flex flex-col items-center mt-3 gap-3'>
                    <button type="submit" className='font-medium bg-gradient-to-tl from-light-blue to-semi-white shadow-md rounded-full py-2.5 px-6 border border-black'>Crear cuenta</button>
                    <p className=''>Si ya tiene una, <span className='text-sm font-medium text-dark-blue'><Link to="/login">inicie sesión</Link></span></p>
                </div>
            </form>
        </div>
    </div>
  )
}
