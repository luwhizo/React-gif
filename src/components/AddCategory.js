import React, { useState } from 'react'

export const AddCategory = ({zetLista}) => {

 const [texto, setTexto]=useState(" " )
    
    const handleValue=(e)=>{
        setTexto(e.target.value)
        //console.log(e.target.value)
    }

    const handleFormu=(e)=>{
        e.preventDefault();
        if(texto.trim().length>2) {

            zetLista(a=>[texto,...a])  //<--------------   
        }
        setTexto("")
        
    }
    



    return (
        <form onSubmit={handleFormu}>  
            <input 
            type="text"
            value={texto}
            onChange={handleValue}
            >
            
            </input>
         </form>
        
    )
}
