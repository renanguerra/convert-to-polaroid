import React from 'react'
import './header.css'

const Header = () => {
    return(
        <div>

          <div className='header'>
            <div className="left">
                  <h2><a id='link' href='/'>Convert-to-Polaroid</a></h2>
            </div>

            <div className="right">
              <a id='link' href="/contato">Contato</a>
            </div>
          </div>

        </div>
    );
}

export default Header;