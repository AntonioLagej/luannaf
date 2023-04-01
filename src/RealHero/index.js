import React from "react";

import DropWater from "../images/autumn-woods.webp";
import Button_saiba_mais from '../images/button_saiba-mais.png'
import { HeroImg ,CtaButton, CtaButton2, Wrapper,Texto} from "./styles";
import { Link ,animateScroll as scroll,scroller, animateScroll} from "react-scroll";
const RealHero=()=>{


    return(
<Wrapper>
    <HeroImg src={DropWater}/>
    <CtaButton2>A sua jornada de autoconhecimento começa com um passo.</CtaButton2>
    <Texto> Agende agora uma consulta com a Psicóloga Luanna Ferreira</Texto>
    <Link smooth={true} offset={-30} to="contato"> <CtaButton   
    src={Button_saiba_mais}>Agendar Atendimento</CtaButton></Link>
      

      </Wrapper>

    );
}

export default RealHero;