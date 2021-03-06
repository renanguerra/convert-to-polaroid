import React, {useState} from 'react';
import Polaroid from '../../components/index'


import Header from '../../components/header/index'


import './App.css';

function Home() {
  const [image,setImage] = useState(String);
  const [show,setShow] = useState(Boolean);


  const handleChange = function loadFile(event:any) {
    if (event.target.files.length > 0) {
        const file = URL.createObjectURL(event.target.files[0]);
        setImage(file);
        setShow(true)
    }
};


  return (
    <div className="App">

      <Header/>

      <div className="main" id='main'>
        <h2 className="text1">Como funciona?</h2>
        <h3 className="text2">Basta Selecionar sua imagem no campo abaixo.</h3>
        <label className='labelInput' htmlFor="myImage"> Selecionar uma imagem.</label>
        <input onChange={(e) => handleChange(e)} type="file" id="myImage" accept="image/*" />

        <div id="polaroid-hidden">
          <Polaroid show={show} img={image}/>
        </div>



      </div>

        

    </div>
    
  );
}

export default Home;
