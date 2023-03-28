import styled from "styled-components";

export const Carrossel=styled.h2`
z-index: -100;

`;
export const Nome=styled.h4`
font-size: 16pt;
font-weight: normal;
z-index: -100;
@media only screen and(min-width: 768px){

   font-size: 12pt;
}`
export const Titulo=styled.p`
z-index: -100;
text-decoration: underline;
font-weight: bold;
text-align: center;
font-size: 21pt;
@media only screen and(max-width: 768px){

   font-size: 12pt;
}

`
export const Depoimento=styled.p`

font-weight: normal;

font-size: 16pt;

@media only screen and(min-width: 768px){

   font-size: 12pt;
}
`
export const Wrapper=styled.div`
  overflow-x: hidden; 
font-family:"Poppins";
display: block;
z-index: -100;
width: 70vw;
height: fit-content;
padding-bottom: 30vh;
padding-top: 20vh;
margin-left: 15vw;
@media only screen and(min-width: 768px){
    padding-top: 10vh;
   width: 50vh;
   margin-top: 0;
   font-size: 1rem;
   

}
`;



