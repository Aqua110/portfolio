import React from 'react'
import '../css/common.css'

const footer = (props) => {
  return (
    <div className={`footer-body ${props.theme}`}>
      <p>&copy;</p>
      <p className='footer-content'> 2024 | Designed and coded with ❤️️ by Aqdas Rehman</p>      
    </div>
  )
}

export default footer
