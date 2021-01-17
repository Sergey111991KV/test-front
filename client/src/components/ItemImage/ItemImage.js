import React from 'react'
import './ItemImage.css'


const ItemImage = (props) => {

    function imageClick  (id)  {
        console.log(id);
      } 
    return (
      <div className='imageItem' >
       <img src={props.urlImage}  onClick={() => imageClick(props.idImage)}/>
      </div>
  
    )
  }
  
  export default ItemImage;
  