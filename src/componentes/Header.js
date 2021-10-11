import React from 'react'
import aaa from './aaa.png'
const Header= () => {
    return (
        <nav class="navbar navbar-light justify-content-center">
            <a className="navbar-brand text-bold m-5" href="/"   >
                <img src={aaa} className="card-img-top" />

            </a>
          
            
        </nav>
    )
}
export default Header;