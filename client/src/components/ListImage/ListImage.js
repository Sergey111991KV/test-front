
import React from 'react'
import ItemImage from '../ItemImage/ItemImage'
import './ListImage.css'
import axios from 'axios'




   
const ListImage = (props) => {
  let ImageForClick = () => {
    axios.get('https://boiling-refuge-66454.herokuapp.com/images').then(response => {
      props.setImage(response.data.items)
    })}
    console.log(ImageForClick)
    let arrayImage = props.images.map(image => (<ItemImage urlImage={image.url} idImage={image.id} stateModal={props.stateModal}/>))
    return (
        <div className='list_image' >
          {arrayImage}
      </div>
  
    )
  }
  
export default ListImage;


  
