import React from 'react'
import './Services.css'
import { ServiceList } from '../../data'


export default function Services() {
  return (
     <div id='services' className='services'>
        <div className='left-service'>
        <h1 className='title-service'>Services</h1>
         <p className='about-service'>We are dedicated to providing quality service, and customer satisfaction
          at a great value in our shop. Our goal is to provide our customers with friendlies. Most convenient auto
          body repair services experince, from body repair and paint, and collision to maintenance. 
          We work with all major insurance companies and our expert repais are backed by multiple inspections and 
          checks, so we're happy to offer you a lifetime guarantee on every repair we do.
        </p> 
        
        <div className='service-wrap'>
         {ServiceList.map((service, id) => (
          <article className='service-items' key={id}>
            <div className='service-list'>{service.id}. {service.title}</div>
            <p className='list-explain'>{service.description}</p>
          </article>
          ))}
          </div>
          <a className='btn-service' href='#contact'>CONTACT US</a>
        </div> 
      
      {/* <div className='right-service'>
          <img src="assets/paint.jpg"alt="" />
      </div>        */}
     </div> 
  )
}
