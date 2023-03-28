import React from "react"
import Paisagem from '../images/ocean-waves.gif'
import { Wrapper,VideoLuanna , Introducao, VideoWrapper} from "./styles"
import { InView,useInView } from "react-intersection-observer"
import { useState,  useEffect} from "react";
import '../video-react.css'; 
import { Player } from 'video-react';
const Abordagem = () => {
  
      
  
      
    return(



<Wrapper id='abordagem'>
 <VideoWrapper>
<VideoLuanna   autoPlay={true}
    poster="/assets/poster.png"
    src={'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4'}
  width={320}
fluid={false}
   
   />
</VideoWrapper>
    <Introducao >
 
    A psicoterapia fenomenológico existencial é uma vertente de psicoterapia que entende a existência humana de maneira singular, 
    sempre em processo e transformação. Compreende que cada pessoa experimenta a vida de maneira particular, partindo dos afetos, 
    livre para fazer escolhas e responsável pelas escolhas que fizer.

    </Introducao>
  
    </Wrapper>
  
 
 );
}
export default Abordagem