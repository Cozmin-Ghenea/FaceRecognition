import React ,{Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from'./components/Particles/Particles'
import './App.css';

function App() {



  return (
  
    
  <div className="App">
     
      <Navigation/>
      <Particles className="partcles"/>
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
