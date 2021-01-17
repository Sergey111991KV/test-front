import React from 'react'
import ItemImage from '../ItemImage/ItemImage'
import './ListImage.css'



const ListImage = () => {
    let list = 
    [{id:237, url:"https://picsum.photos/id/237/300/200"},
    {id:238,url:"https://picsum.photos/id/238/300/200"},
    {id:239,url:"https://picsum.photos/id/239/300/200"},
    {id:240,url:"https://picsum.photos/id/240/300/200"},
    {id:241,url:"https://picsum.photos/id/241/300/200"},
    {id:242,url:"https://picsum.photos/id/242/300/200"}]

    let arrayImage = list.map(image => (<ItemImage urlImage={image.url} idImage={image.id}/>))
    return (
        <div className='listImage' >
          
          {arrayImage}
      </div>
  
    )
  }
  
  export default ListImage;
  