import React from 'react'
import './ModalChatMessage.css'


const ModalChatMessage = (props) => {

   
    return (
  
        <div className='modal_form'>
            <div>{props.commentData}</div>
            <div>{props.commentText}</div>
        </div>
    
  
    )
  }
  
  export default ModalChatMessage;