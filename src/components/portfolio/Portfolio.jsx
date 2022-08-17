import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'PWESTO KHO Restobar Website with Online Ordering System',
    desc: 'Website and Online ordering system with admin side using HTML,CSS,Bootstrap,PHP, and MySQL.',
    github: 'https://github.com',
    demo: 'https://pwestokhorestobar.azurewebsites.net'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Lost & Paws : Pet Lost and Found System in Python with QR Code',
    desc: 'Pet Lost and Found System with QR Code using Python Programming.',
    github: 'https://github.com',
    demo: 'https://drive.google.com/file/d/1QBEV8UjOUygybb12jukx8MzuYIWML3yt/view'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent School Projects</h5>
      <h2>Case Studies</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, desc, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h6>{desc}</h6>
              <div className="portfolio__item-cta">
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio