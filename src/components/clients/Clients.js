import React from 'react'
import './Client.css'
import { clientList } from '../../data'
import {FcGoogle} from "react-icons/fc"


export default function Clients() { 
  
  return (   
  <div id='clients' className='testimonials'>
        <h1>Reviews</h1>
        <div className='container'>
          {clientList.map(data => (          
          <div  key={data.id} className="card">
            <div className='top'>
              <img src={data.img} className='user' alt=""/>
            </div>
            <div className='bottom'>
              <h6>{data.name}</h6>
            </div>
            <div className='center'>
              {data.desc}
            </div>
            
          </div>
        ))}
        </div>
    </div>
  )
}
