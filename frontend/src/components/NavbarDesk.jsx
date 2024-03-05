import React from 'react';
import Link from 'next/link';
import { roboto } from './ui/fonts';

export default function NavbarDesk() {
  return (
    <div className={`w-70 bg-stone-400 text-white flex flex-col text-center justify-between h-screen ${roboto.className} antialiased`}>
      <div className='flex flex-col items-center mt-34'>
        <div className="rounded-full bg-white w-30 h-30 margin-auto"></div>
        <div className='mt-7'>
          <h2 className='text-xl font-bold'>Nombre Apellido</h2>
          <h4 className='font-extralight'>Administrador</h4>
        </div>
      </div>
      <nav className='flex flex-col text-center justify-center'>
        <Link href="/" className='h-14 hover:bg-black active:bg-black focus:bg-black flex items-center justify-center font-medium'>Dashboard</Link>
        <Link href='/inventory' className='h-14 flex items-center justify-center font-medium hover:bg-black active:bg-black focus:bg-black'>Inventario</Link>
        <Link href='/activity' className='h-14 flex items-center justify-center hover:bg-black active:bg-black focus:bg-black font-medium'>Actividad</Link>
        <Link href='/sales' className='h-14 flex items-center justify-center hover:bg-black active:bg-black focus:bg-black font-medium'>Ventas</Link>
        <Link href='/orders' className='h-14 flex items-center justify-center hover:bg-black active:bg-black focus:bg-black font-medium'>Pedidos</Link>
        <Link href='/employees' className='h-14 flex items-center justify-center hover:bg-black active:bg-black focus:bg-black font-medium'>Recursos Humanos</Link>
        <Link href='/reports' className='h-14 flex items-center justify-center hover:bg-black active:bg-black focus:bg-black font-medium'>Reportes</Link>
      </nav>
      <button className='mb-8 text-xs'>Cerrar sesión</button>
    </div>
  );
}
