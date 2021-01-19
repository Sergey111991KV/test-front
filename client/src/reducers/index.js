export const initialState = {
        images : [
            {id:237, url:"https://picsum.photos/id/237/300/200"},
            {id:238,url:"https://picsum.photos/id/238/300/200"},
            {id:239,url:"https://picsum.photos/id/239/300/200"},
            {id:240,url:"https://picsum.photos/id/240/300/200"},
            {id:241,url:"https://picsum.photos/id/241/300/200"},
            {id:242,url:"https://picsum.photos/id/242/300/200"}
        ],
        isOpenedModal: true,
        form : {
          userName : 'Ваше имя',
          textUserComment : 'Ваш комментарий'
        },
        comments  : [{id:153, text: "Крутая фотка", date: "1578054737927"},
                      {id: 152, text: "Крутая фотка", date: "1578054737927"}]
        }
    
  
  
  export function rootReducer(state = initialState) {
    return state
  }