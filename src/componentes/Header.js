import React from 'react'
import aaa from './aaa.png'
import ReactPlayer from 'react-player'
const Header= () => {
    return (
        <nav class="navbar navbar-light justify-content-center">
               <div>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=MqvQiexh42w'
          className='react-player'
          playing
          width='300px'
          height='175px'
        />
      </div>
       <a className="navbar-brand text-bold m-3" href="/"   >
                <img class="aaa" src={aaa} className="card-img-top" />

            </a>
            <div>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=MqvQiexh42w'
          className='react-player'
          playing
          width='300px'
          height='175px'
        />
      </div>
          
            
        </nav>
    )
}
export default Header;