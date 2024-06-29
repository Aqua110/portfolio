import React from 'react'
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

const contact = (props) => {
  return (
    <div className={`contact-body ${props.theme}`}>
      <SectionTag title = 'Get in touch' theme={props.theme}/>
      <p className='contact-heading'> What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
      <div className='main-contact-container'>
        <div className='contact-details-container'>
          <div className='contact-detail' name='email'>
          <img className='icon' src={props.theme==='dark'?dark_mail_icon:light_mail_icon} alt="" />
            <p>aqdas.rehman110@gmail.com</p>
            <img className='icon' src={props.theme==='dark'?dark_copy_icon:light_copy_icon} alt="" />
          </div>
          <div className='contact-detail' name='number'>
            <img className='icon' src={props.theme==='dark'?dark_phone_icon:light_phone_icon} alt="" />
            <p>+91 87504 12766</p>
            <img className='icon' src={props.theme==='dark'?dark_copy_icon:light_copy_icon} alt="" />
          </div>          
            <p className='link-list-heading'>You may also find me on these platforms!</p>          
            <ul className='hero-link-list'>
                <li className='hero-link-list-item'>
              <img className='hero-link_icon' src={props.theme==='dark'?dark_github_icon:light_github_icon} alt="" />
            </li>
            <li className='hero-link-list-item'>
              <img className='hero-link_icon' src={props.theme==='dark'?dark_linkedin_icon:light_linkedin_icon} alt="" />              
            </li>
            </ul>

        </div>
        <form className='quarry-form'>
          <div className='quarry-input-container'>
            <input className={`quarry-input ${props.theme}`} type='text' name='name' placeholder='Name*'/>
            <input className={`quarry-input ${props.theme}`} type='email' name='email' placeholder='E-mail*'/>
          </div>
          <textarea className={`quarry-textarea ${props.theme}`} name="massage" id="" cols="48" rows="10" placeholder="Massage"></textarea>
          <button id="send-btn" className= {props.theme}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default contact
