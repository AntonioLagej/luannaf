import React from "react";

import { Link ,animateScroll as scroll,scroller} from "react-scroll";
import LogoPsi from '../images/psicologia.png'
import{LogoImg,Wrapper,NavButton, Active} from './styles'
import { useInView,InView } from 'react-intersection-observer';
const Header = () => {

   
    return(
    
    
  

      <Wrapper >
      <LogoImg src={LogoPsi}/><div style={{marginTop:'2vh'}}>Luanna Ferreira</div>
        <NavButton  >< Link spy={true} to='sobre' activeClass='active' smooth={ 'easeInOutQuint'} >Sobre</Link></NavButton> 
        <NavButton ><Link spy={true}  activeClass='active'  to='contato'smooth={true} offset={-30}>Contatos</Link></NavButton> 
        <NavButton ><Link spy={true}  activeClass='active'  to='abordagem'smooth={true} offset={20}>Abordagem</Link></NavButton>   
         <NavButton ><Link  spy={true}  activeClass='active' to='depoimentos'smooth={true}offset={20}>Depoimentos</Link></NavButton>  
   
      </Wrapper>

    )
    }
    
  

export default Header;