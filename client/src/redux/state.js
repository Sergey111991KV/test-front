import {rerenderEntireTree} from '../redux/render'

let state = {

    images : [
        {id:237, url:"https://picsum.photos/id/237/300/200"},
        {id:238,url:"https://picsum.photos/id/238/300/200"},
        {id:239,url:"https://picsum.photos/id/239/300/200"},
        {id:240,url:"https://picsum.photos/id/240/300/200"},
        {id:241,url:"https://picsum.photos/id/241/300/200"},
        {id:242,url:"https://picsum.photos/id/242/300/200"}
    ],
    isOpenedModal: false,
    form : {
      userName : 'Ваше имя',
      textUserComment : 'Ваш комментарий'
    },
    comments  : [{id:153, text: "Крутая фотка", date: "1578054737927"},
                  {id: 152, text: "Крутая фотка", date: "1578054737927"}]
    }

  let today = new Date().toISOString().slice(0, 10)
  
export  let stateModal = () => { 
  switch (state.isOpenedModal) {
    case true:
      state.isOpenedModal= false;
    case false:
      state.isOpenedModal = true;
    default: 
    state.isOpenedModal= false;
  }
  rerenderEntireTree()
 }

  
export  let addComment = () => {
    let newComment = {
      id : 1,
      text :  state.form.textUserComment,
      date : today
    }
    state.comments.push(newComment)
    state.form.textUserComment = ''
    rerenderEntireTree(state)
  }
  

  
// export  let updateNewComment = (newComment) => {
//     state.form.textUserComment = newComment
//     rerenderEntireTree(state)
//   }
export  let updateNewComment = (newComment) => {
    state.form.textUserComment = newComment
    rerenderEntireTree(state)
  }

export default state