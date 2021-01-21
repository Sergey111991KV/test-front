import React from 'react'
import ModalChat from '../ModalChat/ModalChat';
import ModalForm from '../ModalForm/ModalForm';
import './ModalView.css'
import {closeModalViewCreator} from '../../redux/store'


const ModalView = (props) => {
 
  let closeClick = () =>  {
   
    props.dispatch(closeModalViewCreator())
  } 
 

    return (
      <div className={`modal_view ${props.isOpenedModal ? 'open' : 'close'}`} >
        <div className='modal_body'>
            <img className='image_modal' src={props.touchObjectImage.url}></img>
            <ModalChat comments={props.touchObjectImage.comments}/>
            <ModalForm  
                        textUserName = {props.textUserName}
                        textUserComment={props.textUserComment}
                        dispatch={props.dispatch}
                       
            />
            <div className='modal_close' onClick={closeClick}>×</div>
          
        </div>
      </div>
  
    )
  }
  
  export default ModalView;
  