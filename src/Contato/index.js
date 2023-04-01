import React from "react"
import IconWhatsapp from "../images/whatsapp-icone.webp";
import IconInstagram from "../images/Instagram_icon.webp";
import { Wrapper,Titulo , Paragrafo, WhatsappIcon, Linkname,SocialMedia,Contatosimg}  from "./styles"
import { AnimationOnScroll } from "react-animation-on-scroll";
import Contimg from '../images/contatos.png'
import ReactGA from 'react-ga'
const Contato = () =>{
  ReactGA.initialize("G-XYRD30W3V2");
 
  return(
 

    
  <Wrapper id='contato' >

   <AnimationOnScroll animateIn="animate__bounce"><h1>Contatos</h1></AnimationOnScroll> 
  
    <Paragrafo >Entre em contato comigo através dos botões abaixo!<br/>
        Vamos marcar sua primeira sessão!
    </Paragrafo>
    <div>
   <SocialMedia  eventLabel="Whatsapp" to="https://wa.me/5531985768174" target='_blank' > <WhatsappIcon src={IconWhatsapp} title="Whatsapp"/><Linkname>Whatsapp</Linkname></SocialMedia> 
  
   <SocialMedia eventLabel="Instagram" to="https://www.instagram.com/luannaferreira.psi/" target='_blank'> <WhatsappIcon src={IconInstagram} title="Instagram"/><Linkname>Instagram</Linkname></SocialMedia> 
 
  </div>
  
  </Wrapper>
 

);}
export default Contato;