import React from 'react'
import '../css/common.css'

const skill_card = (props) => {
  return (
    <div className='skill-card'>
        <img className='skill-card-logo' src= {props.logo} alt='logo'/>
        <p className='skill-name'>{props.name}</p>
    </div>
  )
} 

export default skill_card
