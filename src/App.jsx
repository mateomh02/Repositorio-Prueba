import React from 'react';
import { useEffect, useState } from 'react';
import { Listado } from './components/Listado';
import { Botones } from './components/Botones';


export default function App() {
  return (
  <div className='bg-dark text-white'>
    <h1 className='text-center display-1 py-4'>Rick And Morty</h1>
    <Listado/>
  </div>  
  )
}
