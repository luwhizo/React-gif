import React from 'react'
import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from './hoooks/useFetchGifs'
//import { getGifs } from './helpers/GetGifs'



export const GifGrid = ({category}) => {

  /*   const [images, setImages] = useState([])

    useEffect(()=>{    // sirve para que se ejecute una sola vez 
        getGifs(category).then(setImages)
    },[category]) */
    

const {data,loading}=useFetchGifs(category);
//console.log(state)

    




    return(   
        <>
            <h3> {category} </h3>
            {
                loading && <p> cargando... </p>
            }

             <div className="card-grid">
                        {
                            data.map(img =>(
                                <GifGridItem 
                                key={img.id}
                                {...img} 
                                
                                />

                            ))
                        }

            </div>
        </>
    )





}