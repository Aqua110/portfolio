import React from 'react'
import { Link } from "react-router-dom";
import SectionTag from '../componentes/section_tag.js'
import '../css/contact.css'
import dark_phone_icon from '../img/dark phone icon.png'
import light_phone_icon from '../img/light phone icon.png'
import dark_mail_icon from '../img/dark mail icon.png'
import light_mail_icon from '../img/light mail icon.png'
import dark_copy_icon from '../img/dark copy icon.png'
import light_copy_icon from '../img/light copy icon.png'
import dark_github_icon from '../img/dark github icon.png'
import light_github_icon from '../img/light github icon.png'
import dark_linkedin_icon from '../img/dark linkedin icon.png'
import light_linkedin_icon from '../img/light linkedin icon.png'

const contact = ({theme}) => {
  return (
    <div className={`contact-body ${theme}`}>
      <SectionTag title = 'Get in touch' theme={theme}/>
      <p className='contact-heading'> What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
      <div className='main-contact-container'>
        <div className='contact-details-container'>
          <div className='contact-detail' name='email'>
          <img className='icon' src={theme==='dark'?dark_mail_icon:light_mail_icon} alt="Email" />
            <p>aqdas.rehman110@gmail.com</p>
            <img className='icon' src={theme==='dark'?dark_copy_icon:light_copy_icon} alt="copy" />
          </div>
          <div className='contact-detail' name='number'>
            <img className='icon' src={theme==='dark'?dark_phone_icon:light_phone_icon} alt="Phone" />
            <p>+91 87504 12766</p>
            <img className='icon' src={theme==='dark'?dark_copy_icon:light_copy_icon} alt="copy" />
          </div>          
            <p className='link-list-heading'>You may also find me on these platforms!</p>          
            <ul className='hero-link-list'>
            <li className='hero-link-list-item'>
              <Link to='https://github.com/Aqua110'><img className='hero-link_icon' src={theme==='dark'?dark_github_icon:light_github_icon} alt="Github" /></Link>
            </li>
            <li className='hero-link-list-item'>
              <Link to='https://www.linkedin.com/in/aqdas-rehman-757666256'><img className='hero-link_icon' src={theme==='dark'?dark_linkedin_icon:light_linkedin_icon} alt="Linkedin" /></Link>              
            </li>
          </ul>
        </div>
        <form className='quarry-form'>
          <div className='quarry-input-container'>
            <input className={`quarry-input ${theme}`} type='text' name='name' placeholder='Name*'/>
            <input className={`quarry-input ${theme}`} type='email' name='email' placeholder='E-mail*'/>
          </div>
          <textarea className={`quarry-textarea ${theme}`} name="massage" id="" cols="48" rows="10" placeholder="Massage"></textarea>
          <button id="send-btn" className= {theme}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default contact
