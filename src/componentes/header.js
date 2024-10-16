import React from 'react'
import { useState} from 'react';
import { Link } from "react-router-dom";
import '../css/header.css'
import dark_theme_icon from '../img/dark theme icon.png'
import light_theme_icon from '../img/light theme icon.png'
import dark_menu_icon from '../img/dark menu icon.png'
import light_menu_icon from '../img/dark menu icon.png'
import dark_close_icon from '../img/dark menu icon.png'
import light_close_icon from '../img/dark menu icon.png'


const Header = (props) => {

  const [menu,setmenu]=useState ('active-menu');
  function toggle_menu (){
    if(menu==='active-menu'){
      setmenu('');
      console.log(menu)
    }
    else {
      setmenu('active-menu');
      console.log(menu)
    }
  }
  
  
  return (
    <div className={`header-body ${props.theme}`}>
      <Link className={`logo ${props.theme}`} to='/'><h1>Aqdas's portfolio</h1></Link>
      <div className="menu-button-container">
        <img src={menu==='active-menu'?[props.theme==='dark'?dark_close_icon:light_close_icon]:[props.theme==='dark'?dark_menu_icon:light_menu_icon]} className="menu-button" name="bars" id="menu-bars" alt='menu' onClick={()=>{toggle_menu()}}></img>
      </div>
      <div className={`nav-list-container ${menu}`}>
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
    </div>
  )
}


export default Header
