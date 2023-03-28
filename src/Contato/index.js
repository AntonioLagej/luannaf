import React from "react"
import IconWhatsapp from "../images/whatsapp-icone.png";
import IconInstagram from "../images/Instagram_icon.png";
import { Wrapper,Titulo , Paragrafo, WhatsappIcon, Linkname,SocialMedia,Contatosimg}  from "./styles"
import { AnimationOnScroll } from "react-animation-on-scroll";
import Contimg from '../images/contatos.png'
const Contato = () => (

    
  <Wrapper id='contato' >

   <AnimationOnScroll animateIn="animate__bounce"><Contatosimg  src={Contimg}/></AnimationOnScroll> 
  
    <Paragrafo >Entre em contato comigo através dos botões abaixo!<br/>
        Vamos marcar sua primeira sessão!
    </Paragrafo>
    <SocialMedia>
   <SocialMedia href='https://wa.me/5531985768174'> <WhatsappIcon src={IconWhatsapp} title="Whatsapp"/><Linkname>Whatsapp</Linkname></SocialMedia> 
  
   <SocialMedia href='https://www.instagram.com/luannaferreira.psi/'> <WhatsappIcon src={IconInstagram} title="Instagram"/><Linkname>Instagram</Linkname></SocialMedia> 
 
  </SocialMedia>
  
  </Wrapper>
 

)
export default Contato;