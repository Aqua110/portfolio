import React from 'react'
import '../css/common.css'
import SectionTag from '../componentes/section_tag.js'
import visit_icon from '../img/exit-top-right_82118.png';

const project_card = (props) => {
  return (
    <div className={`project-card ${props.theme}`}>
        <div className={`project-thumbnail-container ${props.theme}`}>
            <img className='project-thumbnail' src = {props.thumbnail}/>

        </div>
        <div className='project-content-container'>
            <h3 className='project-title'>{props.title}</h3>
            <p className='project-description'>{props.description}</p>
            <div className='tech-tag-container'>
                <SectionTag title = 'javascript' theme={props.theme}/>
                <SectionTag title = 'Html'theme={props.theme}/>
                <SectionTag title = 'CSS'theme={props.theme}/>
            </div>
            <img className='visit-icon' src={visit_icon}/>

        </div>
      
    </div>
  )
}

export default project_card
