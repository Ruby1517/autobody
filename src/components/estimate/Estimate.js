import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import "./Estimate.css"

export default function Estimate() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false)
  const form = useRef();
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  }

  const sendEstimate = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_cmmuli2',
      'template_3i6jrpo', form.current, 'qdfbG0SBUQtC3Txc6')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }



  return (
    <div id="estimate" className='estimate'>
      <h1 className='estimate-h1'>Estimate</h1>
      <form className='row g-3 estimate-wrap' ref={form} onSubmit={sendEstimate}>
        <div className='col-md-8'>
          <label htmlFor="name" className="form-label">Your Name *</label>
          <div className='input-wrap'>
            <input type="text" 
                className="form-control" 
                id="name" name="user_name" />               
            </div>
          
        </div>
        <div className='col-md-8'>
          <label htmlFor="address" className="form-label">Address*</label>
          <input type="text" 
                className="form-control" 
                id="address" name="user_address" />
        </div>

        <div className='col-md-8'>
          <label htmlFor="lin2" className="form-label">Address line2</label>
          <input type="text" 
                className="form-control" 
                id="line2" name="line2" />
        </div>
        
        <div className='address-wrap'>         
            <label htmlFor="city" className="form-label">City*</label>
            <input type="text" 
                className="form-control" 
                id="city" name="user_city" /> 
                <br />
            <label htmlFor="state" className="form-label">State*</label>               
            <input type="text" 
                className="form-control" 
                id="state" name="user_state" />  
                <br />
            <label htmlFor="zipcode" className="form-label">Zip Code*</label>
            <input type="text" 
                className="form-control" 
                id="zipcode" name="user_zipcode" />             
        </div>
        
        <div className='col-md-6'>
          <label htmlFor="email" className="form-label">Email*</label>
          <input type="email" 
                className="form-control" 
                id="email" name="user_email" />
        </div>
        <div className='col-md-6'>
          <label htmlFor="phone" className="form-label">Phone*</label>
          <input type="text" 
                className="form-control" 
                id="phone" name="user_phone" />
        </div>
        <div className='col-md-3'>
          <label htmlFor="year" className="form-label">Year*</label>
          <input type="text" 
                className="form-control" 
                id="year" name="car_year" />
        </div>
        <div className='col-md-3'>
          <label htmlFor="make" className="form-label">Make*</label>
          <input type="text" 
                className="form-control" 
                id="make" name="car_make" />
        </div> 
        <div className='col-md-3'>
          <label htmlFor="model" className="form-label">Model*</label>
          <input type="text" 
                className="form-control" 
                id="model" name="car_model" />
        </div> 
        <div className='col-md-12'>
          <label htmlFor="VIN" className="form-label">VIN*</label>
          <input type="text" 
                className="form-control" 
                id="name" name="car_VIN" />
                <p>(On the left side of dashboard, read through windshield. 17 digits)</p>
        </div> 
        <div className='col-md-12'>
          <p>Contact Preference</p>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="call" value="call"/>
          <label class="form-check-label" for="call">Call</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="text" value="text"/>
          <label class="form-check-label" for="text">Text</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="email" value="email2"/>
          <label class="form-check-label" for="email">Email</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="notPerference" value="Not preference" checked={true} />
          <label class="form-check-label" for="notPerference">Not Preference</label>
        </div>
          
        </div>

        <div className='col-md-12'>
          <p>Will you be submitting an insurance claim?</p>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="yes" value="option1"/>
          <label class="form-check-label" for="yes">Yes</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="no" value="option2"/>
          <label class="form-check-label" for="no">No</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="notSure" value="option3" checked={true} />
          <label class="form-check-label" for="notSure">Not Sure</label>
        </div>          
        </div>
        <div className='col-md-12'>
          <h6>Photo 1*</h6>
            <input type="file" name="file1" onChange={changeHandler} />            
        </div>
        <div className='col-md-12'>
          <h6>Photo 2</h6>
            <input type="file" name="file2" onChange={changeHandler} />            
        </div>
        <div className='col-md-12'>
          <h6>Photo 3</h6>
            <input type="file" name="file3" onChange={changeHandler} />            
        </div>
        <div className='col-md-12'>
          <h6>Photo 4</h6>
            <input type="file" name="file4" onChange={changeHandler} />            
        </div>
          <div className='col-md-8'>
            <button className='estimate-btn'>SUBMIT</button>
          </div>
          
      </form>
    </div>
  )
}
