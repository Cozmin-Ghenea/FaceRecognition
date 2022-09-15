import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
    return(
       <div className='f1 w-10 mr4 mt0'>
         <Tilt>
        <div className='Tilt br2 shadow-2 pa1'>
        <img style={{ paddingTop:'5px'}}src={brain} alt="brain time"/>
      </div>
    </Tilt>
       </div>
    )
}

export default Logo