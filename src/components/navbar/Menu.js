import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import HomeRepairService from '@mui/icons-material/HomeRepairService';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export default function Menu({activeNavbar, setActiveNavbar}) { 
    
  return (
    <div>
        <ul>         
            <li className='navbar-li'>  
                <a href="#" 
                    className={`icon ${activeNavbar === "#" ? 'active' : ''}`}
                    onClick={()=>setActiveNavbar("#")}    
                >
                    <HomeIcon fontSize='large'/>
                     Home
                </a>        
            </li>
            <li className='navbar-li'>
                <a href="#about" 
                    className={`icon ${activeNavbar === "#about" ? 'active' : ''}`}
                    onClick={()=>setActiveNavbar("#about")}  
                >
                    <Person2Icon fontSize='large'/>
                    About
                </a>
            </li>
            <li className='navbar-li'>
                <a href="#services"
                    className={`icon ${activeNavbar === "#services" ? 'active' : ''}`}
                    onClick={()=>setActiveNavbar("#services")}  
                >
                    <HomeRepairService fontSize='large' />
                    Services
                </a>
            </li>
            <li className='navbar-li'>
                <a href='#clients'
                    className={`icon ${activeNavbar === "#clients" ? 'active' : ''}`}
                    onClick={()=>setActiveNavbar("#clients")}  
                >
                   <FavoriteBorderIcon fontSize='large'/>
                    Clients
                </a>
            </li>
            <li className='navbar-li nav-last'>
                <a href='#contact'
                    className={`icon ${activeNavbar === "#contact" ? 'active' : ''}`}
                    onClick={()=>setActiveNavbar("#contact")}  
                >
                   <ContactMailIcon fontSize='large'/>
                    Contact
                </a>
            </li>
        </ul>       
    </div>
  )
}
