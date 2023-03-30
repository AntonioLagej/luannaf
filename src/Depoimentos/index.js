import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Carrossel, Depoimento, Nome, Wrapper ,Titulo} from "./styles";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
export default class Testimonials extends Component {
  render() {
    return (
       
    <Wrapper id="depoimentos">
           {/* <Titulo>Depoimentos</Titulo>
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        autoFocus={false}
      >
          <Carrossel>
          <Depoimento>
          
            </Depoimento>
            <Nome></Nome>
         
          </Carrossel>

          <Carrossel>
          <Depoimento>
        
            </Depoimento>
            <Nome></Nome>          
          </Carrossel>
    

     
     
          <Carrossel>
          <Depoimento>
        
            </Depoimento>
            <Nome></Nome>
                       
          </Carrossel>
     
      </Carousel> */}
      </Wrapper>
    );
  }

}

 
