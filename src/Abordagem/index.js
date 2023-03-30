import React from "react"
import Paisagem from '../images/ocean-waves.gif'
import { Wrapper,VideoLuanna , Introducao, VideoWrapper} from "./styles"
import { InView,useInView } from "react-intersection-observer"
import { useState,  useEffect} from "react";
import '../video-react.css'; 
import { Player } from 'video-react';
import { Titulo } from "../About/styles";
const Abordagem = () => {
  
      
  
      
    return(



<Wrapper id='abordagem'>
 {/*<VideoWrapper>
<VideoLuanna   autoPlay={true}
    poster="/assets/poster.png"
    src={'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4'}
  width={320}
fluid={false}
   
   />
</VideoWrapper>
    */}
    <Titulo> Abordagem Fenomenológica Existencial</Titulo>
    <Introducao >
    A abordagem fenomenológica-existencial na psicoterapia destaca a liberdade, escolha e responsabilidade pessoal,
     focando a experiência pessoal de cada indivíduo. Descubra como a colaboração terapeuta-paciente pode ajudá-lo a explorar sua experiência
    subjetiva e encontrar significado e propósito em sua vida.<br/> 
    Entre em contato comigo e conheça um ambiente seguro e acolhedor para se expressar e acessar sua própria sabedoria interior.
    </Introducao>
  
    </Wrapper>
  
 
 );
}
export default Abordagem