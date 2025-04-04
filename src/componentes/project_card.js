import React from 'react'
import '../css/common.css'
import SectionTag from '../componentes/section_tag'
import visit_icon from '../img/exit-top-right_82118.png';
import { Link } from "react-router-dom";

const project_card = (props) => {
  return (
    <div className={`project-card ${props.theme}`}>
        <div className={`project-thumbnail-container ${props.theme}`}>
            <img className='project-thumbnail' src = {props.thumbnail} alt='thumbnail'/>

        </div>
        <div className='project-content-container'>
            <h3 className='project-title'>{props.title}</h3>
            <p className='project-description'>{props.description}</p>
            <div className='tech-tag-container'>
                <SectionTag title = 'javascript' theme={props.theme}/>
                <SectionTag title = 'Html'theme={props.theme}/>
                <SectionTag title = 'CSS'theme={props.theme}/>
            </div>
            <Link to = {props.projectLink}><img className='visit-icon' src={visit_icon} alt='visit the project' /></Link>

        </div>
      
    </div>
  )
}

export default project_card
