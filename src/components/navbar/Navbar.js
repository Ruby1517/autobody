import React, { useState } from 'react'
import "./Navbar.css"
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Menu from './Menu';

export default function Navbar() {
    const [burgerStatus, SetBurgerStatus] = useState(false);
    const [activeNavbar, setActiveNavbar] = useState("#")
   
  return (
    <div id="" className='menu'>       
        <div className='wrap-hamburger'>
            <a href='/' className='logo'>
                <img src="assets/mainlogo.jpg" alt="Torres" />
            </a>            
            <RightMenu>                
                <CustomMenu onClick={()=>SetBurgerStatus(true)} />           
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=>SetBurgerStatus(false)}/>
                </CloseWrapper >        
                <li>        
                <a href='#' 
                  className={activeNavbar === "#" ? "active" : ""}
                  onClick={()=>{
                    setActiveNavbar("#")
                    SetBurgerStatus(false)
                  }}
                >                   
                     Home
                </a>        
            </li>
            <li>
                <a href='#about'
                  className={activeNavbar === "#about" ? "active" : ""}
                  onClick={()=> {
                    setActiveNavbar("#about")
                    SetBurgerStatus(false)
                  }}
                >                   
                    About
                </a>
            </li>
            <li>
                <a href="#services"
                  className={activeNavbar === "#services" ? "active" : ""}
                  onClick={()=>{
                    setActiveNavbar("#services")
                    SetBurgerStatus(false)
                  }}
                >                    
                    Services
                </a>
            </li>
            <li>
                <a href='#clients'
                  className={activeNavbar === "#clients" ? "active" : ""}
                  onClick={()=>{
                    setActiveNavbar("#clients")
                    SetBurgerStatus(false)
                  }}
                >                   
                    Clients
                </a>
            </li>
            <li>
                <a href='#contact'
                  className={activeNavbar === "#contact" ? "active" : ""}
                  onClick={()=>{
                    setActiveNavbar("#contact")
                    SetBurgerStatus(false)
                  }}
                >                   
                    Contact
                </a>
            </li>
            </BurgerNav>

        </div>        
        <Menu activeNavbar={activeNavbar} setActiveNavbar={setActiveNavbar}/>
    </div>
    
  )
}

const RightMenu = styled.div`
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  font-size: 8vw;

`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;  
  width: 150px;
  height: fit-content;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: #15023a;
  color: white;
  opacity: 0.7;

  transform: ${props=> props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in;

  li {
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-size: 1rem;
      :hover {
        color: var(--color-primary);
      }
    }  
    
  }
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`
