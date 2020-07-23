



export const getGifs=async(category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=Dvd1UkMoSTsQi9bA8n5Jza2p9t8PJRAY`       
    const res = await fetch(url)
    const {data} = await res.json()
    //console.log(data)
    const Gifs= data.map( img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })    


 
        
    
    //console.log(Gifs)
    return Gifs;
    
    //console.log(images) // AQUI NO DA, SINO MAS ABAJO DENTRO DE RETURN

}