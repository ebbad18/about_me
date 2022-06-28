import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio_image_1.png'
import IMG2 from '../../assets/portfolio_image_2.png'
const Portfolio = () => {

const data = [
  {
    id : 1,
    image: IMG1,
    title: 'A business Website Using Next Js',
    github: 'https://github.com/ebbad18/Project_website',
    demo: 'https://project01-website.netlify.app/'
  },
  
  {
    id : 2,
    image: IMG2,
    title: 'Process Scheduling Algorithm Using JavaScript',
    github: 'https://github.com/ebbad18/Process-Scheduling-Alogrithm',
    demo: 'https://hardcore-feynman-c63ac5.netlify.app/'
  }

]

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
                <a href={github} className='btn' target="blank">Github</a>
                <a href={demo} className='btn btn-primary' target="blank">Live Demo</a>
    
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