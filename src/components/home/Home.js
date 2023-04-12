import React from 'react'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import RoomIcon from '@mui/icons-material/Room';
import { useNavigate } from 'react-router-dom';

import "./Home.css"

export default function Home() {
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate('#estimate')
    // }
    
  return (
    <div id='#' className='home'>
        <div className='left'>
            <div className='title'>
                <h2 className='torres'>Torres</h2>
                <h2 className='auto-body'>Auto Body Inc.</h2>
            </div>
            <div className='expert'>
              Expert Collision Repair for over 10 years!  
            </div>
            <a className='btn-estimate' href="#estimate">GET AN ESTIMATE</a>        
        </div>

        <div className='right'>
            <div className='hour-icon'>
                <QueryBuilderIcon fontSize='large'/>
                <h2 className='hours'>HOURS</h2>
            </div>
            
            <div className='work-hour'>
                <div>Monday-Friday</div>
                <div>7:00-4:00</div>
            </div>
            <div className='work-hour'>
                <div>Saturday</div>
                <div>Closed</div>
            </div>
            <div className='work-hour'>
                <div>Sunday</div>
                <div>Closed</div>                
            </div>
            <div className='home__icons'>                
               <div className='home__icon'>
                    <PhoneIphoneIcon fontSize='medium'/>
                    <p>(559)286-4750,  (559)443-9694</p>
                </div> 
                <a href='https://goo.gl/maps/WDKC951cRLTvwDgP6' target='_blank' className='home__icon'>
                    <RoomIcon fontSize='medium' />
                    <div>2345 W Belmont Ave, Fresno, CA 93728</div>
                </a>
            </div>
        </div>        
    </div>
  )
}
