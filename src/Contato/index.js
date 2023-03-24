import React from "react"
import IconWhatsapp from "../images/whatsapp-icone.png";
import IconInstagram from "../images/Instagram_icon.png";
import { Wrapper,Titulo , Paragrafo, WhatsappIcon, Linkname,SocialMedia}  from "./styles"
import { AnimationOnScroll } from "react-animation-on-scroll";

const Contato = () => (

    
  <Wrapper id='contato' >

   <AnimationOnScroll animateIn="animate__bounce"><Titulo >Contato</Titulo></AnimationOnScroll> 
  
    <Paragrafo >Entre em contato comigo atraves dos botões abaixo!<br/>
        Vamos marcar sua primeira sessão!
    </Paragrafo>
    <SocialMedia>
   <SocialMedia href='https://wa.me/5531985768174'> <WhatsappIcon src={IconWhatsapp} title="Whatsapp"/><Linkname>Whatsapp</Linkname></SocialMedia> 
  
   <SocialMedia href='https://www.instagram.com/luannaferreira.psi/'> <WhatsappIcon src={IconInstagram} title="Instagram"/><Linkname>Instagram</Linkname></SocialMedia> 
 
  </SocialMedia>
  
  </Wrapper>
 

)
export default Contato;