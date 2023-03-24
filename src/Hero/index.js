import React from "react"
import { AnimationOnScroll } from "react-animation-on-scroll"
import Livro from '../images/livro-removebg.png'

import { Wrap ,Titulo,Texto,LivroImage} from "./styles"

const Hero = () => {
 
   return(
    

   <Wrap id="hero">
  <AnimationOnScroll initiallyVisible={true}  duration={2} offset={330} animatePreScroll={false} animateOut="animate__fadeOut" animateIn="animate__fadeIn" >
          < Titulo><br/>Olá, seja bem-vindo (a)!</Titulo>
         <Texto >É um prazer te receber! <br/>
         Só de estar aqui tenha a certeza que já deu um grande passo<br/>
         para cuidar da sua saúde mental
         <br/>Pode ter certeza que juntos faremos avanços significativos!
         </Texto>
         </AnimationOnScroll>
         <LivroImage src={Livro}/>
         
 </Wrap>

 

)}
export default Hero;