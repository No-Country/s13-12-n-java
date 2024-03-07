import React from 'react'
import InputComp from '../../components/InputComp'
import { Link, useNavigate } from "react-router-dom"
import { useForm } from '../../hook/useForm.js'
import { useMediaQuery } from 'react-responsive';
import Logo from '../../components/Logo.jsx';
import axios from 'axios';

export default function Register() {
    const isMobile = useMediaQuery({ maxWidth: 1023 });
    
    const navigate = useNavigate()
    const { name, lastname, email, onEmailChange, password, rPassword, onPasswordChange, rol, onRolChange, country, onCountryChange, onLastNameChange, onNameChange, formState, onResetForm } = useForm({
        name: '',
        lastname: '',
        email: '',
        rol: '',
        country: '',
        password: '',
        rPassword: '',
    })
    const baseURL = 'http://localhost:8080/swagger-ui/index.html#/'
    const onRegister = (e) => {
        e.preventDefault();
        axios 
            .post(`${baseURL}/auth-controller/registro`, {...formState})
            .then((res) => {
                let data = {
                    token: res.data,
                    state: {
                        loggedIn: true,
                        ...formState,
                    }
                }
                localStorage.setItem("data", JSON.stringify(data));
            })
        console.log(JSON.parse(localStorage.getItem("data")))
        navigate('/dashboard', {
            replace: true,
            state: {
                loggedIn: true,
                ...formState
            }
        })
        onResetForm();
    }
  return (
    <div className="bg-[url('/images/backgrounds/register-mob.png')] xl:bg-[url('/images/backgrounds/register-desk.jpg')] bg-cover h-screen w-screen bg-no-repeat flex items-center justify-center xl:justify-start">
        <div className='bg-gradient-to-tl from-light-blue to-semi-white w-10/12 xl:w-2/5 rounded-3xl py-6 xl:mx-12 xl:h-4/5'>
            {!isMobile && <div className='flex justify-center'><Logo/></div>}
            <h1 className='text-3xl text-center'>Bienvenido</h1>
            <h3 className='text-center text-sm mb-2'>Por favor, ingrese sus datos</h3>
            <form onSubmit={onRegister}>
                <InputComp type="text" value={name} onChange={onNameChange} name="name" id="name" placeholder="Nombre" required={true} label="" />
                <InputComp type="text" value={lastname} onChange={onLastNameChange} name="lastname" id="lastname" placeholder="Apellido" required={true} label=""/>
                <div className='flex mx-5 text-sm justify-between'>
                    <select className='bg-transparent border-b py-1 mb-3' onChange={onRolChange} id="rol" name="rol" placeholder="Rol">
                        <option value="" className=''>Rol</option>
                        <option value="0">Vendedor</option>
                        <option value="1">Empleado</option>
                    </select>
                    <select className='bg-transparent border-b py-1 mb-3' onChange={onCountryChange} id="country" name="country" placeholder="País">
                        <option value="">País</option>
                        <option value="1">Argentina</option>
                        <option value="2">Chile</option>
                        <option value="3">Brasil</option>
                        <option value="4">Uruguay</option>
                        <option value="5">Paraguay</option>
                        <option value="6">Bolivia</option>
                    </select>
                </div>
                <InputComp type="email" value={email} onChange={onEmailChange} name="email" id="email" placeholder="email@atlantisinventory.com" required={true}/>
                <InputComp type="password" value={password} onChange={onPasswordChange} name="password" id="password" placeholder="Ingrese una contraseña" required={true}/>
                <InputComp type="password" value={rPassword} onChange={onPasswordChange} name="rPassword" id="repeatPassword" placeholder="Repita la contraseña" required={true}/>
                <div className='flex flex-col items-center mt-3 gap-3'>
                    <button type="submit" onClick={onRegister} className='font-medium bg-gradient-to-tl from-light-blue to-semi-white shadow-md rounded-full py-2.5 px-6 border border-black'>Crear cuenta</button>
                    <p className=''>Si ya tiene una, <span className='text-sm font-medium text-dark-blue'><Link to="/login">inicie sesión</Link></span></p>
                </div>
            </form>
        </div>
    </div>
  )
}