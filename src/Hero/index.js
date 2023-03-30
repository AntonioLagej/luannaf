import React from "react"
import { AnimationOnScroll } from "react-animation-on-scroll"
import Livro from '../images/livro-removebg.png'
import psicoImage from '../images/psicologia.png'
import QuoteOpen from '../images/Cquote1.png'
import QuoteClos from '../images/Cquote2.png'

import HandImage from '../images/support.png'
import { Wrap ,Titulo,Texto,LivroImage,ImagemOnda, Simbolo, Psicologia, Texto2, Texto3, Simbolo2, Psicologia2, TituloPsi, Quotes} from "./styles"

const Hero = () => {
 
   return(
    

   <Wrap  id="hero">
 
          < Titulo> <Quotes src={QuoteOpen}/>Aventurar-se no sentido mais elevado é precisamente tomar consciência de si próprio.     <Quotes src={QuoteClos}/><br/><h4>Sören Kierkegaard</h4> </Titulo>
     
                   <Psicologia>
          <Simbolo src={psicoImage}/>

         <TituloPsi>
                Psicoterapia
         </TituloPsi>
       <Texto3>Processo focado em ajudar um indivíduo a resolver questões emocionais.</Texto3>
         </Psicologia>
         <Psicologia2>
          <Simbolo2 src={HandImage}/>

         <Texto>
         Abordagem Humanista
         </Texto>
       <Texto2>Essa abordagem não busca interpretar nem objetificar, mas descrever os fatos do modo como se apresentam.</Texto2>
         </Psicologia2>
         
 </Wrap>

 

)}
export default Hero;