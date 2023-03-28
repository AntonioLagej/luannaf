import React from "react"
import { AnimationOnScroll } from "react-animation-on-scroll"
import ImagemAtendimento from '../images/terapiaOnline.png'
import { Wrapper,Titulo , Paragrafo, AtendimentoImg}  from "./styles"
import "animate.css/animate.min.css";
const Atendimento = () => (

  <Wrapper id='atendimento' className="hidden">
<AtendimentoImg src={ImagemAtendimento}/>
  
  </Wrapper>

)
export default Atendimento;