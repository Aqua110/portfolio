import React from 'react'
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
          <p className='hero-intro-para'>I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
            <br/><br/><br/>
            <div className="location-container">
              <img className='location-icon' src={props.theme==='dark'?dark_location_icon:light_location_icon} alt="" />
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
              <img className='hero-link_icon' src={props.theme==='dark'?dark_github_icon:light_github_icon} alt="" />
            </li>
            <li className='hero-link-list-item'>
              <img className='hero-link_icon' src={props.theme==='dark'?dark_linkedin_icon:light_linkedin_icon} alt="" />              
            </li>
          </ul>
        </div>
        <div className='img-container'>
          <img src={hero_pic} className={`hero-img ${props.theme}`}/>
        </div>      
    </div>
  )
}

export default hero
