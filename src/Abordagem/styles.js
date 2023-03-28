import styled from "styled-components";
import { Player } from "video-react";
import flores from '../images/moroccan-flower.png'

export const PaisagemImg=styled.img`
max-width: 100%;
padding-bottom: 15vh;

@media only screen and (min-width: 768px) {
position: absolute;
left: 0;
top: 170vh;
max-width: 100%;


}
`;
export const Wrapper=styled.div`
  overflow-x: hidden;
text-align: justify;
height: fit-content;
margin-top: 15vh;

font-family:'Poppins';
display: inline-block;
z-index: 1;
@media only screen and (max-width: 768px) {
  margin-top: 10vh;
  height: fit-content;

  margin-left: 3rem;
  max-width: 100%;
  width: 75%;


}


`;
export const VideoWrapper =styled.div`
@media screen and(max-width:768px){
  float: none;
 

}
`;
export const VideoLuanna=styled(Player)`
margin-left: 7vw;
float: left;



`
export const Introducao=styled.div`
width: 40%;
height: fit-content;
margin-top: 10%;
margin-right: 20%;

font-size: 1.3rem;
float: right;
@media only screen and (max-width: 768px) {
  max-width: 100%;
  width: 100%;
  margin-right: 0%;

margin-left: 0%;
}
`;