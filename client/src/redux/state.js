


let store = {
   _state : {
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
                  {id: 152, text: "Крутая фотка", date: "1578054737927"}],
    mainImage: "https://boiling-refuge-66454.herokuapp.com/images/"  
    },
  _callSubscruber () {
      console.log('state was change')
    },
  getState (){
    return this._state
  },
  subscribe (observer) {
    this._callSubscruber = observer
  },
  _stateModal (value) { 
    this._state.isOpenedModal= value;
    this._callSubscruber(this._state)
     },
  addComment () {
      let today = new Date().toISOString().slice(0, 10)
      let newComment = {
        id : 1,
        text :  this._state.form.textUserComment,
        date : today
      }
      this.state.comments.push(newComment)
      this.state.form.textUserComment = ''
      this.callSubscruber(this.state)
    },
    updateNewComment (newComment) {
      this.state.form.textUserComment = newComment
      this.callSubscruber(this.state)
      },
    dispatch(action){
      if (action.type === 'SWITCH-MODAL-VIEW'){
          this._stateModal(action.value);
          // this._callSubscruber(this._state)
       
       
      }

    }
  
  }


export default store

  
  


  

