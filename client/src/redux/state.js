import axios from 'axios'




const GET_IMAGE = 'GET-IMAGE'
const OPEN_MODAL_VIEW = 'OPEN-MODAL-VIEW'
const GET_COMMENTS = 'GET-COMMENTS'
const CHANGE_TEXT_NAME = 'CHANGE-TEXT-NAME'
const CHANGE_TEXT_COMMENT = 'CHANGE-TEXT-COMMENT'
const SEND_COMMENT = 'SEND-COMMENT'
const CLOSE_MODAL = 'CLOSE-MODAL'




let store = {
   _state : {
    images : [],
    isOpenedModal: false,
    textUserName : '',
    textUserComment : '',
    touchObjectImage : {
        id : 0,
        url : "",
        comments  : [
            {id:153, text: "Крутая фотка", date: "1578054737927"}   
        ]
      },
    idTouchObjectImage: 0 ,
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


                              // ------- //

  _getImage () {
      axios.get('https://boiling-refuge-66454.herokuapp.com/images').then(response => {
        this._state.images = response.data
        this._callSubscruber(this._state)
      }) 
  },

  _openModalView (idObject) { 
    this._state.isOpenedModal= true;
    this._state.idTouchObjectImage = idObject 
    this._callSubscruber(this._state)
     },

  _getTouchObjectImage () {
    axios.get("https://boiling-refuge-66454.herokuapp.com/images/" + this._state.idTouchObjectImage ).then(response => {
      this._state.touchObjectImage = response.data
      this._callSubscruber(this._state)
    }) 
  },

_updateTextComment (newComment) {
  this.state.textUserComment = newComment
  this._callSubscruber(this._state)
},
_updateNameUser (newUser) {
  this.state.textUserName = newUser
  this._callSubscruber(this._state)
},




_sendComment () {
  let today = new Date().toISOString().slice(0, 10)
  let newComment = {
        id : 1,
        text :  this._state.textUserComment,
        date : today
      }
  const funcSendObject = () => {    
    axios.post("https://boiling-refuge-66454.herokuapp.com/images/" + this._state.idTouchObjectImage + "/comments", {
      newComment
      }).then(response => console.log(response.data))
      .catch(error => console.log(error));
    }
    funcSendObject()
  this.state.form.textUserComment = ''
  this._callSubscruber(this._state)
  },


_closeModalView () {
  this._state.isOpenedModal = false
  let defaultObject = {
    id : 0,
    url : "",
    comments  : [
        {id:153, text: "Крутая фотка", date: "1578054737927"}   
    ]
  }
  
  this._state.touchObjectImage = defaultObject 
  this._state.idTouchObjectImage = "" 
  this._callSubscruber(this._state)
  },
   dispatch(action){
    switch (action.type) {
      case GET_IMAGE:
        this._getImage()
        break;
      case OPEN_MODAL_VIEW:
            this._openModalView(action.id)
        break;
      case GET_COMMENTS:
              this._getTouchObjectImage()
        break;
      case CLOSE_MODAL:
                this._closeModalView()
        break;
      default:
        break;
        
    // } (action.type === OPEN_MODAL_VIEW){
    //       this._openModalView(action.value);
    //   }
    //   else if (action.type === GET_IMAGE) {
    //       this._getImage()
      }
       
      }

    }
  
export const openModalCreator = (id) => ({type: OPEN_MODAL_VIEW, id: id}) 
export const getImageCreator = () => ({type: GET_IMAGE}) 
export const getTouchObjectImageCreator = () => ({type: GET_COMMENTS}) 
export const closeModalViewCreator = () => ({type: CLOSE_MODAL}) 

export default store

  
  


  

