import React, {useState} from 'react';
import Polaroid from '../components/index'
import './App.css';

function Home() {
  const [image,setImage] = useState(String);

  return (
    <div className="App">

          <div className='header'>
            <div className="left">
                  <h2>Convert-to-Polaroid</h2>
            </div>

            <div className="right">
              <a id='link' href="">Contato</a>
              <a id='link' href="">Donate</a>
            </div>
          </div>

      <div className="main">
        <h2 className="text1">Como funciona?</h2>
        <h3 className="text2">Como essa página é estática você precisa upar sua imagem em algum lugar e colar o link no campo abaixo.</h3>
        
        <input onChange={e => setImage(e.target.value)} id='my-image' type='text' />
        
        <input type="button" value='Converter'/>

        <div className="polaroid-hidden">
          <Polaroid img={image}/>
        </div>

      </div>

        

    </div>
    
  );
}

export default Home;
