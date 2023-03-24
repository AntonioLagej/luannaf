import React from "react"
import { AnimationOnScroll } from "react-animation-on-scroll"
import ImagemAtendimento from '../images/psicoterapia-on-line-1.jpg'
import { Wrapper,Titulo , Paragrafo, AtendimentoImg}  from "./styles"
import "animate.css/animate.min.css";
const Atendimento = () => (

  <Wrapper id='atendimento' className="hidden">
<AtendimentoImg src={ImagemAtendimento}/>
    <Titulo>Modos de Atendimento</Titulo>
  
    <Paragrafo>Atualmente só ofereço Atendimento online <br/>
      O Atendimento online oferece conforto e praticidade<br/>
      e pode ser realizado com uma maior flexibilidade de horarios.
    </Paragrafo>
  </Wrapper>

)
export default Atendimento;