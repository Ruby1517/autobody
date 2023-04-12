import React from 'react'
import "./About.css"


export default function About() {
 
  return (
    <div id='about' className='about'>
        <div className='left-about'>
            <h1 className='title-about'>ABOUT COMPANY</h1>
            <p className='about-torres'>
              We are dedicated to providing quality service, and customer satisfaction
              at a great value in our shop. Our goal is to provide our customers with friendlies. Most convenient auto
              body repair services experince, from body repair and paint, and collision to maintenance. 
              We work with all major insurance companies and our expert repais are backed by multiple inspections and 
              checks, so we're happy to offer you a lifetime guarantee on every repair we do.
                 
            </p>
            <p className='about-torres2'>
              We are committed to offering our customers the lowest possible price for the highest 
              quality repairs providing the best service. We invest ourselves in your satisfaction 
              with our work. From your foot in the door to getting back in your repaired vehicle we 
              are here for you throughout the process.   
            </p>
            <a className='btn-about' href="#services" >SERVICES</a>
        </div>
        <div className='right-about'>            
            <img  className='about-img' src="assets/t1.jpg" alt="" />
        </div>
    </div>
  )
}
