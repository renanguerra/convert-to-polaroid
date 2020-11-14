import React from 'react'
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import './polaroid.css'


interface PolaroidProps{
    img: string
}

interface PolaroidShow{
    show: boolean
    img: string
}

const renderCard: React.FC<PolaroidShow> = (props)=> {
    const showCard = props.show;
    if (showCard){
        return <Polaroid img={props.img}/>
    }
    else {
        return <p></p>
    }
}

function DownloadImage(){
    domtoimage.toBlob(document.getElementById('polaroid')as HTMLElement)
    .then(function (blob) {
        saveAs(blob, 'myImage.png');
    });
  }

const Polaroid: React.FC<PolaroidProps> = (props) => {
    return (
        <div className="main-polaroid">
            <div className='polaroid' id='polaroid'>
                <img className='img' src={props.img} alt='Sua imagem vai aqui'/>
            </div>
            <span onClick={() => DownloadImage()} className='labelInput'>Download</span>
        </div>
    )
}

export default renderCard;