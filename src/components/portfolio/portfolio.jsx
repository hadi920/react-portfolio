import React from 'react'
import './portfolio.css'
import img1 from '../../assets/port1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'
import img4 from '../../assets/port4.png'
import img5 from '../../assets/port5.png'
import img6 from '../../assets/port6.png'

const data = [
  {
    id:1,
    image: img1,
    title:'Cryto Currency Dashboard & Financial Visualization',
    github:'https://github.com',
    demo:'hhhtpo'
  },
  {
    id:2,
    image: img2,
    title:'Charts templates & infographics in Figma',
    github:'https://github.com',
    demo:'hhhtpo'
  },
  {
    id:3,
    image: img3,
    title:'Charts templates & infographics in Figma',
    github:'https://github.com',
    demo:'hhhtpo'
  },
  {
    id:4,
    image: img4,
    title:'High-quality dashboard templates for startups',
    github:'https://github.com',
    demo:'hhhtpo'
  },
  {
    id:5,
    image: img5,
    title:'Templates for financial and cryptocurrency services',
    github:'https://github.com',
    demo:'hhhtpo'
  },
  {
    id:6,
    image: img6,
    title:'Eclipse - Figma dashboard UI kit for data design web apps',
    github:'https://github.com',
    demo:'hhhtpo'
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                      <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn'>Github</a>
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

export default portfolio