import React from 'react'
import { Personajes } from './Personajes';
import { Botones } from './Botones';
import { useState, useEffect } from 'react';


export function Listado() {

const[characters, setCharacters] = useState([])
const[siguiente, setSiguiente]= useState(null)
const[Atras, setAtras]= useState(null)
const[Actual, setActual]= useState('https://rickandmortyapi.com/api/character')

useEffect(()=>{
  async function fetchData(){
    const response = await fetch (Actual);
    const data = await response.json();

    setCharacters(data.results)
    setSiguiente( data.info.next);
    setAtras(data.info.prev)
    
  }
  fetchData()
  console.log(Actual)
},[Actual])


  return (
    <div className='container'>
      <Botones siguiente={()=> siguiente!==null &&  setActual(siguiente)} anterior={()=> Atras!==null && setActual(Atras)}/>
        <div className='row'>
          {characters.map((character)=>{
              return(
                <div className='col-md-4' key={character.id}>
                  <Personajes character={character}/>
                </div>)
          })}
          <Botones siguiente={()=> siguiente!==null &&  setActual(siguiente)} anterior={()=> Atras!==null && setActual(Atras)}/>
        </div>
    </div>
  );
}
