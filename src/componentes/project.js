import React from 'react'
import '../css/project.css'
import SectionTag from '../componentes/section_tag.js'
import ProjectCard from '../componentes/project_card.js'
import todoslist_thumbnail from '../img/to dos list.png'

const project = (props) => {
  return (
    <div className={`project-body ${props.theme}`}>
      <SectionTag title = 'Projects' theme={props.theme}/>
      <p className='project-heading'>Some of the noteworthy projects I have built:</p>
      <ProjectCard title = "To do's list" thumbnail= {todoslist_thumbnail} description = 'This interactive To-Do List application helps users efficiently manage their tasks. Users can easily add tasks with titles and descriptions, mark them as completed, and delete individual tasks or the entire list. The user-friendly interface ensures a seamless task management experience. This project demonstrates my ability to create practical, user-focused web applications.' theme={props.theme}/>
    </div>
  )
}

export default project
