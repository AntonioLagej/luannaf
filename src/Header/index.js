import React, { useState } from "react";

import { Link ,animateScroll as scroll,scroller} from "react-scroll";
import LogoPsi from '../images/Logo.png'
import HamburgerImg from '../images/icons8-menu-arredondado-50.png'
import{LogoImg,Wrapper,NavButton, Menuzin, Hamburger, MenuItem,IconMenu,LogoItem} from './styles'
import { useInView,InView } from 'react-intersection-observer';
import { slide as Menu } from "react-burger-menu";
import LogoContato from '../images/contato.png'
import LogoSobre from '../images/Sobre_mim.png'

import LogoDepoimento from '../images/depoimentos.png'
import LogoAbordagem from '../images/Abordagem.png'

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
         {/* <NavButton ><Link  spy={true}  activeClass='active' to='depoimentos'smooth={true}offset={20}>Depoimentos</Link></NavButton>   */}
         
         <Menu style={{display:"flex"}}noOverlay  right  isOpen={isOpen}
    onOpen={handleIsOpen}
    onClose={handleIsOpen}customBurgerIcon={ <img  src={HamburgerImg}  /> } >
  
     

    
      <MenuItem  >< Link    onClick={closeSideBar} spy={true}  to='sobre' activeClass='active' smooth={ 'easeInOutQuint'} > <IconMenu src={LogoSobre}/>Sobre</Link></MenuItem> 
        <MenuItem  >< Link spy={true} onClick={closeSideBar}  activeClass='active'  to='contato'smooth={true} offset={-30}>  <IconMenu src={LogoContato}/>< span>Contatos</span></Link></MenuItem> 
        <MenuItem  ><Link spy={true} onClick={closeSideBar} activeClass='active'  to='abordagem'smooth={true} offset={20}> <IconMenu src={LogoAbordagem}/>Abordagem</Link></MenuItem>   
         {/* <MenuItem ><Link  spy={true} onClick={closeSideBar} activeClass='active' to='depoimentos'smooth={true}offset={20}> <IconMenu src={LogoDepoimento}/>Depoimentos</Link></MenuItem>   */}
        
      
       </Menu>
        
      </Wrapper>
    
      </>
    )
    }
    
  

export default Header;