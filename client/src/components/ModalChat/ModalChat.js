import React from 'react'
import './ModalChat.css'
import ModalChatMessage from './ModalChatMessage'



const ModalChat = (props) => {

    let arrayComment = props.comments.map(comment => (<ModalChatMessage commentText={comment.text} commentData={comment.date}/>))
    return (
        
        <div className='modal_form'>
          {arrayComment}
        </div>
    
  
    )
  }
  
  export default ModalChat;
  