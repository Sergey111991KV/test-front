// import React from 'react'
// import './ModalForm.css'


// let addCommentActionCreator = () => {
//     return {
//         type: 'ADD-COMMENT'
//     }
// }



// const ModalForm = (props) => {
//     // addComment={props.addComment}
//     // updateNewComment={props.updateNewComment}
//     // let addComment = () => {
//     //     props.addComment()
//     //     props.updateNewComment('')
//     // }

//     let addCommentButton = () => {
//         props.dispatch(addCommentActionCreator());
//     }


//     let newCurrenComment = React.createRef()

//     let changeComment = () => {
//         let text = newCurrenComment.current.value
//         console.log(text)
//         props.updateNewComment(text)
//     }
   
//     return (
  
//         <div className='modal_form'>
//            <textarea    onChange 
//                         className='input_param'
//                         placeholder="Ваше имя" 
//                         onChange={() => changeComment()}    
//                         textUserName={props.textUserName}>
//             </textarea>
//            <textarea    className='input_param' 
//                         placeholder="Ваш комментарий"
//                         onChange={() => changeComment()}
//                         ref={newCurrenComment}
//                         textUserComment={props.textUserComment}
//                         >
//             </textarea>
//            <button  className='button_send_comment' 
//                     onClick={ addCommentButton }>
//                     Оставить комментарий
//             </button>
//         </div>
    
  
//     )
//   }
  
//   export default ModalForm;
  

  import React from 'react'
import './ModalForm.css'
import {updateNameUserCreator,updateTextCommentCreator,sendCommentCreator} from '../../redux/state'




const ModalForm = (props) => {
    // addComment={props.addComment}
    // updateNewComment={props.updateNewComment}
    // let addComment = () => {
    //     props.addComment()
    //     props.updateNewComment('')
    // }


    let newCurrenUser = React.createRef()
    let newCurrenComment = React.createRef()

    let changeNameUser = () => {
        let name = newCurrenUser.current.value
        console.log(name)
        props.dispatch(updateNameUserCreator(name))
    }

    let changeComment = () => {
        let comment = newCurrenComment.current.value
        props.dispatch(updateTextCommentCreator(comment))
    }

    let addCommentButton = () => {
        props.dispatch(sendCommentCreator());
    }

    return (
  
        <div className='modal_form'>
           <textarea    onChange 
                        className='input_param'
                        placeholder="Ваше имя" 
                        ref={newCurrenUser}
                        onChange={() => changeNameUser()} 
                        value={props.textUserName}   
                        // textUserName={props.textUserName}
                        >
            </textarea>
           <textarea    className='input_param' 
                        placeholder="Ваш комментарий"
                        onChange={() => changeComment()}
                        ref={newCurrenComment}
                        value={props.textUserComment}
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
  