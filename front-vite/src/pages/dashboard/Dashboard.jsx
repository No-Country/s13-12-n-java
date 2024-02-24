import React from 'react'
import Topbar from '../../components/Topbar'
import CardsInfo from '../../components/cards-info'

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Actividad de hoy</h2>
      <div className='md:grid grid-cols-2'>
      <CardsInfo className=''></CardsInfo>
      </div>
    </div>
  )
}
