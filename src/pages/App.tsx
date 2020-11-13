import React, {useState} from 'react';
import Polaroid from '../components/index'
import './App.css';

function Home() {
  const [image,setImage] = useState(String);


  const handleChange = function loadFile(event:any) {
    if (event.target.files.length > 0) {
        const file = URL.createObjectURL(event.target.files[0]);
        setImage(file);
    }
};

  return (
    <div className="App">

          <div className='header'>
            <div className="left">
                  <h2>Convert-to-Polaroid</h2>
            </div>

            <div className="right">
              <a id='link' href="/contato">Contato</a>
              <a id='link' href="/donate">Donate</a>
            </div>
          </div>

      <div className="main">
        <h2 className="text1">Como funciona?</h2>
        <h3 className="text2">Basta Selecionar sua imagem no campo abaixo.</h3>
        <label className='labelInput' htmlFor="myImage"> Selecionar uma imagem.</label>
        <input onChange={(e) => handleChange(e)} type="file" id="myImage" accept="image/*" />

        <div className="polaroid-hidden">
          <Polaroid img={image}/>
        </div>

        <span className='labelInput'>Download</span>

      </div>

        

    </div>
    
  );
}

export default Home;
