
import React from 'react'
import ItemImage from '../ItemImage/ItemImage'
import './ListImage.css'
import {getImageCreator} from '../../redux/state'


   
const ListImage = (props) => {
  if (!props.images.length) {
  props.dispatch(getImageCreator ())
  }
    let arrayImage = props.images.map(image => (<ItemImage urlImage={image.url} idImage={image.id} dispatch={props.dispatch}/>))
    return (
        <div className='list_image' >
          {arrayImage}
      </div>
    )
  }
  
export default ListImage;


  
