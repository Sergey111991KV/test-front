import React from 'react'
import './ItemImage.css'
import {openModalCreator,getTouchObjectImageCreator} from '../../redux/store'




const ItemImage = (props) => {



    let imageClick = (id) =>  {
        props.dispatch(openModalCreator(id))
        props.dispatch(getTouchObjectImageCreator())
      } 
    return (
      <div className='imageItem' >
       <img src={props.urlImage}  onClick={() => imageClick(props.idImage)}/>
      </div>
  
    )
  }
  
  export default ItemImage;
  