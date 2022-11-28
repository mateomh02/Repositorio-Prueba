import React from 'react'

export function Personajes({character}) {
  return (
    <div className='text-center'>
        <h3>{character.name}</h3>
        <img className='img-fluid rounded-pill' src={character.image} alt={character.name}/>
        <hr class="border border-white border-1 opacity-50" />
        <h6>Especie: {character.species} </h6>
        
    </div>
  )
}
