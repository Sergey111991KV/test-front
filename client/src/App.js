import React  from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ListImage from './components/ListImage/ListImage';
import './App.css'
import ModalView from './components/ModalView/ModalView';


function App (props) {
  return (
    <div className='app-wrapper'>
      <Header/>
      <ListImage  images={props.appState.images} 
                  dispatch={props.dispatch}
                  />
      <Footer />
      <ModalView  isOpenedModal={props.appState.isOpenedModal} 
                  comments={props.appState.comments} 
                  form={props.appState.form}
                  addComment={props.addComment}
                  dispatch={props.dispatch}
                  
      ></ModalView>


    </div>

  )
}

export default App;


// fetchUrlImages = () => {
//   this.setState ()
//   axios.get("https://boiling-refuge-66454.herokuapp.com/images")
//     .then(response => this.setState({urlImages: response.data}))
//     .catch(e => console.log(e))
// }