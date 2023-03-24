import React from "react"
import { AnimationOnScroll } from "react-animation-on-scroll";
import { InView } from "react-intersection-observer";
import fotoLuanna from "../images/luanna.png";
import { Titulo,FotoLuannaimg,Wrapper,Texto} from "./styles";
const About = () => (
  
 
    <Wrapper id='sobre'>
   
    <FotoLuannaimg  src={fotoLuanna}/>
    <AnimationOnScroll   duration={2} offset={330} animateIn="animate__fadeIn"  animateOut="animate_fadeOut">
    <Titulo>Sobre mim</Titulo>
    <Texto title="Sobre mim"> Psicóloga de Adultos e Adolescentes💭<br/>
    CRP: 04/70061<br/>
    Estou disponível para lhe oferecer um lugar seguro e acolhedor. <br/>
                  Aprenda a lidar melhor com suas angústias, questionamentos<br/> e tudo que te preocupa com leveza.<br/>
                   Me procure e dê o primeiro passo!<br/>

       
    </Texto>
    
    </AnimationOnScroll>
    </Wrapper>
  
);
export default About