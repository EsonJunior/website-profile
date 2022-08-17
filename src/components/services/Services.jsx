import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>

      <div className="container services__container">
        <article></article>
        <article className="service">
          <div className="service__head">
            <h3>Other Skills</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Image Manipulation (Photoshop)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Video Editing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Graphic Design</p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  )
}

export default Services