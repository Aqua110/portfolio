import React from 'react'
import '../css/header.css'
import dark_theme_icon from '../img/dark theme icon.png'
import light_theme_icon from '../img/light theme icon.png'
import { Link } from "react-router-dom";

const Header = (props) => {
  
  return (
    <div className={`header-body ${props.theme}`}>
        <Link className={`logo ${props.theme}`} to='/'><h1>Aqdas's portfolio</h1></Link>
        <ul className='nav-list'>
            <Link className={`nav-list-item ${props.theme}`} to = '/about'>About</Link>
            <Link className={`nav-list-item ${props.theme}`} to = '/project'>Project</Link> 
            <Link className={`nav-list-item ${props.theme}`} to = '/contact'>Contact</Link> 
            <li className='nav-list-item icon-container' id='theme-button'>
              <img className='theme-icon' src={props.theme==='dark'?dark_theme_icon:light_theme_icon} onClick={()=>{props.toggle_theme();}} alt='Switch Theme'></img>
            </li>
            <li className='nav-list-item'><button className={props.theme} id='resume-button'>Download CV</button></li>
        </ul>
    </div>
  )
}


export default Header
