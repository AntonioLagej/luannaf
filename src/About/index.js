import React from "react"
import { AnimationOnScroll } from "react-animation-on-scroll";
import { InView } from "react-intersection-observer";
import fotoLuanna from "../images/luanna.png";
import { Titulo,FotoLuannaimg,Wrapper,Texto} from "./styles";
const About = () => (
  
 
    <Wrapper id='sobre'>
   
    <FotoLuannaimg  src={fotoLuanna}/>
   
    <Titulo>Sobre</Titulo>
    <Texto title="Sobre"> Luanna Ferreira, psicóloga de Adultos e Adolescentes<br/>
    <div>CRP: 04/70061</div><br/>
    Por meio de uma abordagem terapêutica centrada na pessoa humana, ajudo meus pacientes a explorar 
    suas emoções, pensamentos e comportamentos para identificar as causas de seus problemas e desenvolver 
    estratégias eficazes para lidar com eles. Trabalho com adolescentes e adultos, oferecendo um ambiente 
    seguro, acolhedor e livre de julgamentos para explorar questões como ansiedade, depressão, relacionamentos,
    autoestima e  muito mais. 
    </Texto>
  
    </Wrapper>
  
);
export default About