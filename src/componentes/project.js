import React from 'react'
import '../css/project.css'
import SectionTag from '../componentes/section_tag'
import ProjectCard from '../componentes/project_card'
import todoslist_thumbnail from '../img/to dos list.png'
import tripify_thumbnail from '../img/tripify thumbnail.png'

const project = (props) => {

  return (
    <div className={`project-body ${props.theme}`}>
      <SectionTag title = 'Projects' theme={props.theme}/>
      <p className='project-heading'>Some of the noteworthy projects I have built:</p>

      <ProjectCard title = "To do's list" thumbnail= {todoslist_thumbnail} description = 'This interactive To-Do List application helps users efficiently manage their tasks. Users can easily add tasks with titles and descriptions, mark them as completed, and delete individual tasks or the entire list. The user-friendly interface ensures a seamless task management experience. This project demonstrates my ability to create practical, user-focused web applications.' projectLink='https://aqua110.github.io/To-do-s-list' theme={props.theme}/>

      <ProjectCard title = "Tripify - Tour Guide Application" thumbnail= {tripify_thumbnail} description = 'Tripify is an interactive tour guide application designed to enhance travel experiences by providing users with essential information about various destinations. The application features an intuitive interface that allows users to explore different places, access detailed descriptions, and plan their trips effectively. This project showcases my ability to create user-friendly and informative web applications.' projectLink='https://aqua110.github.io/tripify/' theme={props.theme}/>

    </div>
  )
}

export default project