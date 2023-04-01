import styled from "styled-components";

export const Wrapper=styled.div`
height: 50vh;
background-color: white;
padding-bottom: 50vh;
@media only screen and (max-width:768px) {

  width: 100%;
  padding-bottom:0%;
}
`;
export const HeroImg=styled.img`
width: 100%;
margin-top: 0;
@media only screen and (max-width:768px) {
    width: auto;
    height: 100%;
    margin-top: 10vh;

}
`;
export const CtaButton=styled.button`

position: relative;
top: -30vh;
left: 20vw; 
border: none;
  border-radius: 3em;
  background-color: #b2ba78 ;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  display: inline-block;
  font-family: 'Poppins', serif;
  color: black;
  font-size: 1em;
  text-decoration: none;
  padding: 1em 2em;
  width: 20vw;

  :hover{
    background-color: #b2ba78;
    color:black;
  }
  :active{
    scale: 95%;
  }
  @media only screen and (max-width:768px) {
padding-left: 0;
padding-right: 0;
    font-size: .6rem;
  text-decoration: none;
  text-align: center;
  width: 20vw;
    top: -10vh;
    left: 70vw;
    font-weight: 800;
  }
 
`;
export const CtaButton2=styled.div`
padding: 1%;
position: absolute;
top: 15vh;
left: 0vw; 
  font-family: 'Poppins';
  font-weight: 800;
  color: white;
  font-size: 3.5rem;
  text-shadow: -3px 3px 3px black;
  text-decoration: none;
  width: 40vw;
 
  @media only screen and (max-width:768px) {
    left: 10vw;
    top:10vh;
    text-align: left;
    font-size: 1.3rem;
  text-decoration: none;
  width: 70vw;
  }
`;
export const Texto=styled.div`
padding: 1%;
position: absolute;
top: 60vh;
left: 0vw; 
  font-family: 'Poppins';
  font-weight: 800;
  color: white;
  font-size: 1.5rem;
  text-shadow: -3px 3px 3px black;
  text-decoration: none;
  width: 40vw;
 
  @media only screen and (max-width:768px) {
    left: 10vw;
    top:25vh;
    text-align: left;
    font-size: 1rem;
  text-decoration: none;
  width: 70vw;
  }
`;
