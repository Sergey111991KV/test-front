const GET_IMAGE = 'GET-IMAGE'




const imagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_IMAGE : {
            let initialState = {
                images : [
                    {id:237, url:"https://picsum.photos/id/237/300/200"},
                    {id:238,url:"https://picsum.photos/id/238/300/200"},
                    {id:239,url:"https://picsum.photos/id/239/300/200"},
                    {id:240,url:"https://picsum.photos/id/240/300/200"},
                    {id:241,url:"https://picsum.photos/id/241/300/200"},
                    {id:242,url:"https://picsum.photos/id/242/300/200"}
                ]
            }
            return {
                ...state,
                images: [...state.images, ]
            }
        }
    }
}

export default imagesReducer