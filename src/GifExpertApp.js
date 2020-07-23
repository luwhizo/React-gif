import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


export const GifExpertApp = () => {

const [lista, setLista] = useState(["goku"])


    
    return (
        <>
            <h2>GifExpertApp </h2>
            <AddCategory zetLista={setLista} />
            <hr/>
           
            <ol>
                {
                   lista.map(category=>(
                   <GifGrid 
                   key={category}
                   category={category} 
                   />) 
                   )
                }                 
            </ol>
            
        </>
    )
}
