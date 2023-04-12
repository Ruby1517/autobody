import React, { useRef } from 'react'
import Iframe from 'react-iframe';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function Contact() {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ugta32k', 'template_t7ksaps', form.current, 'qdfbG0SBUQtC3Txc6')
    
    e.target.reset()
  
  }  
  
  return (
      <div id='contact' className='contact-wrap'>
        <h1 className='title-contact'>Contact</h1>
        <div className='contact'>        
            <div className='left-contact'> 
                <form className="row g-3" ref={form} onSubmit={sendEmail}>
                    <div className="col-md-12">
                      <label htmlFor="name" className="form-label">Your Name</label>
                      <input type="text" className="form-control" name="user_name" />
                    </div>                    
                    <div className="col-md-12">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" name="user_email" className="form-control" />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input type="text" name="user_phone" className="form-control" />
                    </div>                    
                    <div className='col-md-12'> 
                    <label htmlFor="name" className="form-label">How Can We Help You?</label>                     
                      <textarea className="form-control" name="message" placeholder='message'></textarea>
                    </div>              
                    <div className="col-md-12">
                        <button className='btn-contact'>SEND</button>
                        {/* {message && <span>Thanks, I'll reply ASAP :)</span>} */}
                    </div>
                </form>
            </div>
            <div className='right-contact'>
                <div className='contact-icon'>
                    <div className='icons'>                       
                        <PhoneEnabledIcon className='set-icon' fontSize='medium' />                          
                        <span>(559)286-4750, (559)443-9694</span>                    
                    </div>
                    <a className='icons' href='mailto:torres_autobody@yahoo.com' target='_blank'>
                        <EmailIcon className='set-icon' fontSize='medium' /><span className='span-icon'>torres_autobody@yahoo.com</span>                    
                    </a>
                    <a className='icons' href='https://goo.gl/maps/WDKC951cRLTvwDgP6' target='_blank'>
                        <RoomIcon className='set-icon' fontSize='medium' /><span className='span-icon'>2345 W Belmont Ave, Fresno, CA 93728</span>                    
                    </a>
                </div>                 
                  <div className='iframe'>
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12787.440697203212!2d-119.8391613!3d36.7499272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x354bccfe4ef200be!2sTorres%20Auto%20Body%2C%20Inc.!5e0!3m2!1sen!2sus!4v1668233585556!5m2!1sen!2sus"
                           width="750" 
                           height="450" 
                           style="border:0;" 
                           allowfullscreen="" 
                           loading="lazy" 
                           referrerPolicy="no-referrer-when-downgrade" /> 
                  </div>     
            </div>       
          </div>
          <div className='footer'>
              <div className='copyright'>
                  © Copyright 2022 | All Rights Reserved | Powered by <a href='https://rodellapro.com' target='_blank'>Ruby Hoseinzadeh</a>
              </div>
              <div className='social'>
                    <InstagramIcon className='social-icon' />
                    <FacebookIcon className='social-icon' />
                    <TwitterIcon className='social-icon' />
              </div>
            
          </div>    
      </div>
      
      
            
    
    
  )
}
