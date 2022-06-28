import React from 'react'
import './services.css'
import {BsCheckCircle} from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        {/* Card 1 */}

        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>PSD to HTML.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Sketch to HTML.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>XD to HTML.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Single Page Web Application.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Responsive Design of your Figma/Dribbble Page.</p>
            </li>
            
          </ul>

           
        </article>

        {/* ========Card 2======== */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Top Quality Work.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Responsive Design.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>100% Optimized Code.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Fast Delivery.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>High Performance Speed.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Smooth 3d Animations.</p>
            </li>
            <li>
              <BsCheckCircle className='service__list-icon' />
              <p>Easily Modified Code.</p>
            </li>
          </ul>

           
        </article>


      </div>
    
    </section>
  )
}

export default Services