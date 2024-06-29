import React from 'react'
import '../css/header.css'
import dark_theme_icon from '../img/dark theme icon.png'
import light_theme_icon from '../img/light theme icon.png'

const Header = (props) => {
  
  return (
    <div className={`header-body ${props.theme}`}>
        <h1 className='logo'>Aqdas's portfolio</h1>
        <ul className='nav-list'>
            <li className='nav-list-item'>About</li>
            <li className='nav-list-item'>Project</li>
            <li className='nav-list-item'>Contact</li>
            <li className='nav-list-item icon-container' id='theme-button'>
              <img className='theme-icon' src={props.theme==='dark'?dark_theme_icon:light_theme_icon} onClick={()=>{props.toggle_theme();}}></img>
            </li>
            <li className='nav-list-item'><button className={props.theme} id='resume-button'>Download CV</button></li>
        </ul>
        
      
    </div>
  )
}


export default Header
