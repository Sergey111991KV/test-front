import React from 'react'
import './ModalForm.css'


const ModalForm = (props) => {
    // addComment={props.addComment}
    // updateNewComment={props.updateNewComment}
    let addComment = () => {
        props.addComment()
        props.updateNewComment('')
    }

    let addCommentButton = () => {
        props.addComment();
    }


    let newCurrenComment = React.createRef()

    let changeComment = () => {
        let text = newCurrenComment.current.value
        console.log(text)
        props.updateNewComment(text)
    }
   
    return (
  
        <div className='modal_form'>
           <textarea    onChange 
                        className='input_param'     
                        value={props.form.userName}>
            </textarea>
           <textarea    className='input_param' 
                        onChange={() => changeComment()}
                        ref={newCurrenComment}
                        value={props.form.textUserComment}
                        >
            </textarea>
           <button  className='button_send_comment' 
                    onClick={ addCommentButton }>
                    Оставить комментарий
            </button>
        </div>
    
  
    )
  }
  
  export default ModalForm;
  