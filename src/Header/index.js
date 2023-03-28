import React, { useState } from "react";

import { Link ,animateScroll as scroll,scroller} from "react-scroll";
import LogoPsi from '../images/psicologia.png'
import HamburgerImg from '../images/icons8-menu-arredondado-50.png'
import{LogoImg,Wrapper,NavButton, Menuzin, Hamburger, MenuItem,IconMenu} from './styles'
import { useInView,InView } from 'react-intersection-observer';
import { slide as Menu } from "react-burger-menu";
import LogoContato from '../images/contato.png'
import './estilo.css';

const Header = () => {

    const [isOpen, setOpen] = useState(false)

const handleIsOpen = () => {
  setOpen(!isOpen)
}

const closeSideBar = () => {
  setOpen(false)
}
      
    return(
    <>
        

      <Wrapper >
            
  

      <LogoImg src={LogoPsi}/><div style={{marginTop:'2vh'}}>Luanna Ferreira</div>
        <NavButton  > < Link spy={true} to='sobre' activeClass='active' smooth={ 'easeInOutQuint'} >Sobre</Link></NavButton> 
        <NavButton ><Link spy={true}  activeClass='active'  to='contato'smooth={true} offset={-30}>Contatos</Link></NavButton> 
        <NavButton ><Link spy={true}  activeClass='active'  to='abordagem'smooth={true} offset={-70}>Abordagem</Link></NavButton>   
         <NavButton ><Link  spy={true}  activeClass='active' to='depoimentos'smooth={true}offset={20}>Depoimentos</Link></NavButton>  
         
         <Menu style={{display:"flex"}}noOverlay  right  isOpen={isOpen}
    onOpen={handleIsOpen}
    onClose={handleIsOpen}customBurgerIcon={ <img  src={HamburgerImg}  /> } >
    <ul style={{float:"left"}} >
  
      <li ><IconMenu src={LogoContato}/></li>
      <li ><IconMenu src={LogoContato}/></li>
      <li ><IconMenu src={LogoContato}/></li>
      </ul>
     

      <ul style={{float:"right"}}>
      <MenuItem  >< Link    onClick={closeSideBar} spy={true}  to='sobre' activeClass='active' smooth={ 'easeInOutQuint'} >Sobre</Link></MenuItem> 
        <MenuItem  >< Link spy={true} onClick={closeSideBar}  activeClass='active'  to='contato'smooth={true} offset={-30}> < span>Contatos</span></Link></MenuItem> 
        <MenuItem  ><Link spy={true} onClick={closeSideBar} activeClass='active'  to='abordagem'smooth={true} offset={20}>Abordagem</Link></MenuItem>   
         <MenuItem ><Link  spy={true} onClick={closeSideBar} activeClass='active' to='depoimentos'smooth={true}offset={20}>Depoimentos</Link></MenuItem>  
         </ul>
      
       </Menu>
        
      </Wrapper>
    
      </>
    )
    }
    
  

export default Header;