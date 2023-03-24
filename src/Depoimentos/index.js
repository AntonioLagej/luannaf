import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Carrossel, Depoimento, Nome, Wrapper ,Titulo} from "./styles";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
export default class Testimonials extends Component {
  render() {
    return (
        <AnimationOnScroll animateIn="animate__pulse">
    <Wrapper id="depoimentos">
           <Titulo>Depoimentos</Titulo>
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={true}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        autoFocus={false}
      >
          <Carrossel>
          <Depoimento>
          A Luanna é, de longe, a melhor psicóloga com quem já fiz terapia. Profissional competente e
           atencioso, que faz você conseguir chegar a conclusões e respostas que tinha dificuldade em enxergar. 
           Ao longo das consultas, tenho obtido bons resultados na cessão da melancolia e na melhora da disposição diária. 
           Recomendo seu trabalho. 
            </Depoimento>
            <Nome>Shirley Fultz</Nome>
         
          </Carrossel>

          <Carrossel>
          <Depoimento>
          Primeira sessão e me senti bem acolhida. Luanna é muito direta nas questões que importam e traz muita segurança no tom de sua voz.
           Seu estilo de abordagem e a franqueza em me direcionar, realmente impactou no dia. Recomendo.
            </Depoimento>
            <Nome>Daniela Keystone</Nome>          
          </Carrossel>
    

     
     
          <Carrossel>
          <Depoimento>
          Luanna exerce um trabalho de excelência.
          Sabe ouvir com atenção e faz suas intervenções impecáveis.
          Em pouco tempo de tratamento me senti muito melhor comigo mesmo e em meus relacionamentos. 
          Pude contar com a ajuda dela para enfrentar o luto da perda de um familiar especial.
          Super recomendo. 
            </Depoimento>
            <Nome>Theo Sorel</Nome>
                       
          </Carrossel>
     
      </Carousel>
      </Wrapper>
      </AnimationOnScroll>
    );
  }

}

 
