import axios from 'axios'


const GET_IMAGE = 'GET-IMAGE'
const OPEN_MODAL_VIEW = 'OPEN-MODAL-VIEW'
const GET_COMMENTS = 'GET-COMMENTS'
const UPDATE_TEXT_NAME = 'UPDATE-TEXT-NAME'
const UPDATE_TEXT_COMMENT = 'UPDATE-TEXT-COMMENT'
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
            // {id:153, text: "Крутая фотка", date: "1578054737927"}   
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

  _updateNameUser (name) {
    console.log(name)
    this._state.textUserName = name
    this._callSubscruber(this._state)
  },

  _updateTextComment (comment) {
    console.log(comment)
  this._state.textUserComment = comment
  this._callSubscruber(this._state)
  },

  _sendComment () {
  let newDate = new Date().getTime()
  let newComment = { 
        id : 153, // ? id 
        text :   this._state.textUserComment,
        date : newDate
      }
    
  axios.post("https://boiling-refuge-66454.herokuapp.com/images/" + this._state.idTouchObjectImage + "/comments", {
      newComment
      }).then(response => 
       
        console.log(response.data))
      .catch(error => 
     
        console.log(error));
  this._state.textUserComment = ''
  this._state.textUserName = ''
  this._callSubscruber(this._state)
  console.log("aaaaa")
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
        case UPDATE_TEXT_NAME:
            this._updateNameUser(action.name)
            break;
        case UPDATE_TEXT_COMMENT:
            this._updateTextComment(action.comment)
            break;
        case SEND_COMMENT:
            this._sendComment()
            break;
        case CLOSE_MODAL:
            this._closeModalView()
            break;
        default:
            break;
          }
       }
    }
  
export const openModalCreator = (id) => ({type: OPEN_MODAL_VIEW, id: id}) 
export const getImageCreator = () => ({type: GET_IMAGE}) 
export const getTouchObjectImageCreator = () => ({type: GET_COMMENTS}) 
export const updateNameUserCreator = (text) => ({type: UPDATE_TEXT_NAME, name: text}) 
export const updateTextCommentCreator = (comment) => ({type: UPDATE_TEXT_COMMENT, comment: comment}) 
export const sendCommentCreator = () => ({type: SEND_COMMENT}) 
export const closeModalViewCreator = () => ({type: CLOSE_MODAL}) 

export default store

  
  


  

