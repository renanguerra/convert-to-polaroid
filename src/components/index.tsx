import React from 'react'
import './polaroid.css'


interface PolaroidProps{
    img: string
}


const Polaroid: React.FC<PolaroidProps> = (props) => {
    return (
        <div className="main-polaroid">
            <div className='polaroid'>
                <img className='img' src={props.img} alt='Sua imagem vai aqui'/>
            </div>
        </div>
    )
}

export default Polaroid;