import React from "react"
import { AnimationOnScroll } from "react-animation-on-scroll";
import { InView } from "react-intersection-observer";
import fotoLuanna from "../images/luanna.png";
import { Titulo,FotoLuannaimg,Wrapper,Texto} from "./styles";
const About = () => (
  
 
    <Wrapper id='sobre'>
   
    <FotoLuannaimg  src={fotoLuanna}/>
   
    <Titulo>Sobre</Titulo>
    <Texto title="Sobre"> Luanna Ferreira, psicóloga de Adultos e Adolescentes💭<br/>
    CRP: 04/70061<br/>
    Psicóloga graduada pelo Centro Universitario Una
    
    </Texto>
  
    </Wrapper>
  
);
export default About