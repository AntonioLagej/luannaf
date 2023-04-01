import styled from "styled-components";
import flores from '../images/moroccan-flower.png'


export const Wrapper= styled.div`

width: 49%;
left: 2%;
height: fit-content;


font-family:'Poppins';
float: left;
@media only screen and (max-width:768px) {
  max-width: 100%;
  width: 90%;
  padding-bottom: 10vh;
  margin-left: 4vw;
  
}
`;
export const Titulo=styled.h3`
@media only screen and (max-width:768px) {
    padding-top: 1vh;
   
   
} 
font-size: 2rem;
text-align: center;

`;
export const Texto=styled.p`
margin-top: -2vh;
font-size: 1rem;
text-align: center;
padding-left: 1vw;
padding-right: 1vw;

`;
export const FotoLuannaimg=styled.img`
margin-top: 10vh;
margin-left:17vw ;
-webkit-border-radius: 150px;
-moz-border-radius: 150px;
border-radius: 150px;
height:40vh;

@media only screen and (max-width:768px) {
  margin-top: 10vh;
  height: 30vh;
  margin-left: 25vw;

}


`;
