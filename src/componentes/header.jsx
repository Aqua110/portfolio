import React from 'react'
import { useState} from 'react';
import { Link } from "react-router-dom";
import '../css/header.css'
import dark_theme_icon from '../img/dark theme icon.png'
import light_theme_icon from '../img/light theme icon.png'
import dark_menu_icon from '../img/dark menu icon.png'
import light_menu_icon from '../img/light menu icon.png'
import dark_close_icon from '../img/dark close icon.png'
import light_close_icon from '../img/light close icon.png'


const Header = (props) => {

  const [menu,setmenu]=useState ('');
  function toggle_menu (){
    if(menu==='active-menu'){
      setmenu('');
    }
    else {
      setmenu('active-menu');
    }
  }

  function close_menu(){
    setmenu('');
  }
  
  
  return (
    <div className={`header-body ${props.theme}`}>
      <Link className={`logo ${props.theme}`} to='/'><h1>Aqdas's portfolio</h1></Link>
      <div className="menu-button-container">
        <img src={menu==='active-menu'?props.theme==='dark'?dark_close_icon:light_close_icon:props.theme==='dark'?dark_menu_icon:light_menu_icon} className="menu-button" name="bars" id="menu-bars" alt='menu' onClick={()=>{toggle_menu()}}></img>
      </div>
      <div className={`nav-list-container ${menu} ${props.theme}`}>
        <ul className='nav-list'>
          <Link className={`nav-list-item ${props.theme}`} to = '/about' onClick={()=>{close_menu()}}>About</Link>
          <Link className={`nav-list-item ${props.theme}`} to = '/project' onClick={()=>{close_menu()}}>Project</Link> 
          <Link className={`nav-list-item ${props.theme}`} to = '/contact' onClick={()=>{close_menu()}}>Contact</Link> 
          <li className='icon-container' id='theme-button' onClick={()=>{props.toggle_theme();}}>
            <p className={`theme_text nav-list-item ${props.theme}`}>Switch theme</p>
            <img className='theme-icon' src={props.theme==='dark'?dark_theme_icon:light_theme_icon} alt='Switch Theme'></img>
          </li>
          <li><button className={props.theme} id='resume-button' onClick={()=> {alert("The CV is not available right now it will be soon")}}>Download CV</button></li>
        </ul>
      </div>
    </div>
  )
}


export default Header