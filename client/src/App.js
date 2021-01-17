import React  from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ListImage from './components/ListImage/ListImage';
import './App.css'


function App() {

  return (
    <div className='app-wrapper'>
      <Header/>
      <ListImage />
      <Footer />
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