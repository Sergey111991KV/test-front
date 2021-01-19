import React from 'react'
import './ItemImage.css'


const ItemImage = (props) => {

//   let changeComment = (text) => {
//     // let text = newCurrenComment.current.value
//     props.updateNewComment(text)
// }


    let imageClick = (id) =>  {
        console.log(id)
        props.stateModal()
      } 
    return (
      <div className='imageItem' >
       <img src={props.urlImage}  onClick={ imageClick(props.idImage)}/>
      </div>
  
    )
  }
  
  export default ItemImage;
  