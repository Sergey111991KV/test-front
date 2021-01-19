import React from 'react'
import ModalChat from '../ModalChat/ModalChat';
import ModalForm from '../ModalForm/ModalForm';
import './ModalView.css'


const ModalView = (props) => {
    return (
      <div className={`modal_view ${props.isOpenedModal ? 'open' : 'close'}`} >
        <div className='modal_body'>
            <img className='image_modal' src='https://picsum.photos/id/242/300/200'></img>
            <ModalChat comments={props.comments}/>
            <ModalForm  
                        form={props.form}
                        addComment={props.addComment}
                        updateNewComment={props.updateNewComment}
            />
            <div className='modal_close' onClick={props.stateModal}>×</div>
          
        </div>
      </div>
  
    )
  }
  
  export default ModalView;
  