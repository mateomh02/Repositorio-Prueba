import React, { useState } from 'react'

export function Botones({siguiente, anterior}) {

  
const[page, setPage]= useState(2)

function NavPage(){

}

  return (
    <>
    <header className='d-flex justify-content-between align-items-center' >
          <button className='btn btn-primary btn-sm' onClick={()=>{
            if(page-2==0){
              setPage(page)
            }else{
              setPage(page-1),anterior()
            }
            }} >Pagina Ant {page-2}</button> 

          <button className='btn btn-primary btn-sm'onClick={()=>{setPage(page+1),siguiente()}}
           >Pagina Sig {page}</button>
    </header>
    
    </>
    
  )
}
