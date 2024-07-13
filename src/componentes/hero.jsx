import React from 'react'
import { Link } from "react-router-dom";
import '../css/hero.css'
import hero_pic from '../img/my photo.jpg'
import dark_location_icon from '../img/dark location icon.png'
import light_location_icon from '../img/light location icon.png'
import dark_github_icon from '../img/dark github icon.png'
import light_github_icon from '../img/light github icon.png'
import dark_linkedin_icon from '../img/dark linkedin icon.png'
import light_linkedin_icon from '../img/light linkedin icon.png'


const hero = (props) => {
  return (
    <div className={`hero-body ${props.theme}`}>
        <div className='content-container'>
          <h2 className='hero-intro-heading'>Hi,I'm Aqdas👋</h2>
          <p className='hero-intro-para'>I'm a budding web development and design professional based in Delhi. I specialize in creating interactive and user-friendly websites using HTML, CSS, JavaScript, and ReactJS. My skills also extend to logo, social media post, and poster designing. Passionate about blending technology with aesthetics, I am eager to learn from real-world experiences and make a mark in the tech and design world.
            <br/><br/><br/>
            <div className="location-container">
              <img className='location-icon' src={props.theme==='dark'?dark_location_icon:light_location_icon} alt="Location" />
              <p>Delhi , India </p>
            </div> 
            <br/>
            <div className='location-container'>
              <div className="active-dot"></div>
              <p>Available for New projects</p>
            </div>
          </p>
          <ul className='hero-link-list'>
            <li className='hero-link-list-item'>
              <Link to='https://github.com/Aqua110'><img className='hero-link_icon' src={props.theme==='dark'?dark_github_icon:light_github_icon} alt="Github" /></Link>
            </li>
            <li className='hero-link-list-item'>
              <Link to='https://www.linkedin.com/in/aqdas-rehman-757666256'><img className='hero-link_icon' src={props.theme==='dark'?dark_linkedin_icon:light_linkedin_icon} alt="Linkedin" /></Link>              
            </li>
          </ul>
        </div>
        <div className='img-container'>
          <img src={hero_pic} className={`hero-img ${props.theme}`} alt='My pic'/>
        </div>      
    </div>
  )
}

export default hero