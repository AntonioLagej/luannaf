import styled from "styled-components";

export const Titulo=styled.div`
padding-top: 20vh;

font-weight:bold;
font-size: 21pt;

`;
export const PaisagemImg=styled.img`

width: 100vw;
@media only screen and (min-width: 768px) {
    
float: left;
width: 50vw;
&.show{
    transform: translateX(-150%);
   transition-duration: 1000ms;
}

&.hidden{
    transform: translateX(0);
    transition-duration: 1000ms;
  }
}
`;
export const Wrapper=styled.div`



text-align: center;
margin-top: -10vh;
font-family:'Work Sans';
display: inline-block;


`;
export const Introducao=styled.div`
padding-top: 10vh;
font-size: 16pt;
transition-duration: 2000ms;

padding-bottom: 28vh;
.hidden{
    transform: translateX(-150%);
   transition-duration: 2000ms;
}

  .show{
    transform: translateX(0);
    transition-duration: 2000ms;
  }
`;
