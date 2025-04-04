import React from 'react'
import '../css/skills.css'
import SectionTag from '../componentes/section_tag'
import SkillCard from '../componentes/skill_card'
import js_icon from '../img/icon-javscript.svg'
import react_icon from '../img/icon-react.svg'
import c_logo from '../img/c logo.png'
import cplusplus_logo from '../img/c++ logo.png'
import python_logo  from '../img/python logo.png'
import html_logo  from '../img/html logo.png'
import css_logo  from '../img/css logo.png'
import jsx_logo  from '../img/jsx logo.png'
import ms_word  from '../img/ms office logo.webp'
import ms_excel  from '../img/ms excel logo.webp'
import ms_power_point  from '../img/ms power point logo.png'



const skills = (props) => {
  return (
    <div className={`skills-body ${props.theme}`}>
      <SectionTag title='Skills' theme={props.theme}/>
      <p className='skills-heading'>The skills, tools and technologies I am really good at:</p>
      <div className='skill-cards-container'>
        <SkillCard logo = {js_icon} name = 'Javascript'/>
        <SkillCard logo = {react_icon} name = 'React' />
        <SkillCard logo = {c_logo} name = 'C' />
        <SkillCard logo = {cplusplus_logo} name = 'C++' />
        <SkillCard logo = {python_logo} name = 'Python' />
        <SkillCard logo = {html_logo} name = 'HTML 5' />
        <SkillCard logo = {css_logo} name = 'CSS' />
        <SkillCard logo = {jsx_logo} name = 'JSX' />
        <SkillCard logo = {ms_word} name = 'MS Word' />
        <SkillCard logo = {ms_excel} name = 'MS Excel' />
        <SkillCard logo = {ms_power_point} name = 'PPT' />

      </div>

      
    </div>
  )
}

export default skills
