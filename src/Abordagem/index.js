import React from "react"
import Paisagem from '../images/psicoterapia-fenomenologico-existencial.jpg'
import { Wrapper,Titulo , Introducao, PaisagemImg} from "./styles"
import { InView,useInView } from "react-intersection-observer"
import { useState,  useEffect} from "react";

const Abordagem = () => {
    const { ref, inView, entry } = useInView();
   
      
  
      
    return(


<InView onChange={(inView,entry) =>{ if(entry.isIntersecting|| inView){

 
var children=Array.from(entry.target.children);
children.forEach(child=>{ child.classList.add('show');
child.classList.remove('hidden');

});


}else{
    var children=Array.from(entry.target.children);
    children.forEach(child=>{child.classList.add("hidden");
    child.classList.remove('show');
});
  

}}}>
<Wrapper id='abordagem'className="hidden">


  
  <PaisagemImg src={Paisagem} className="hidden"/>
    <Titulo className="hidden"> 
       Abordagem Fenomenológica-existencial
    </Titulo>
    <Introducao className="hidden">
    A psicoterapia fenomenológico existencial é uma vertente de psicoterapia que entende a existência humana de maneira singular, 
    sempre em processo e transformação. Compreende que cada pessoa experimenta a vida de maneira particular, partindo dos afetos, 
    livre para fazer escolhas e responsável pelas escolhas que fizer.

    </Introducao>
  
    </Wrapper>
    </InView>
 
 );
}
export default Abordagem