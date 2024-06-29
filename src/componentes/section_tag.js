import React from 'react'
import '../css/common.css'

const section_tag = (props) => {
  return (
    <div className='section-tag-container'>
      <span className={`section-tag ${props.theme}`}>{props.title}</span>
    </div>
  )
}

export default section_tag


