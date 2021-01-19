import React from 'react'
import './ModalChatMessage.css'


const ModalChatMessage = (props) => {

   
    return (
  
        <div className='modal_form'>
            <div className={'data'}>{props.commentData}</div>
            <div className={'text'}>{props.commentText}</div>
        </div>
    
  
    )
  }
  
  export default ModalChatMessage;