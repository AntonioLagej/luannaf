import styled from "styled-components";


export const HeroImg=styled.img`
width: 100%;
@media only screen and (max-width:768px) {
    height: 65vh;
    width: auto;
    margin-top: 6vh;
    margin-left: -30vw;
}
`;
export const CtaButton=styled.button`

position: absolute;
top: 70vh;
left: 20vw; 
border: none;
  border-radius: 3em;
  background-color: #4f632c ;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  display: inline-block;
  font-family: 'Poppins', serif;
  color: white;
  font-size: 1em;
  text-decoration: none;
  padding: 1em 2em;
  width: 20vw;

  :hover{
    background-color: #9fa957;
    color:black;
  }
  :active{
    scale: 95%;
  }
  @media only screen and (max-width:768px) {
    font-size: .7rem;
  text-decoration: none;
  text-align: center;
  padding: 1ren 2rem;
  width: 40vw;
    top: 60vh;
    left: 55vw;
    font-weight: 800;
  }
 
`;
export const CtaButton2=styled.div`
position: absolute;
top: 5vh;
left: 10vw; 
  font-family: 'Poppins';
  font-weight: 800;
  color: white;
  font-size: 4.5rem;
  text-decoration: none;
  width: 50vw;
 
  @media only screen and (max-width:768px) {
    left: 0vw;
    top:20vh;
    text-align: left;
    font-size: 2rem;
  text-decoration: none;
  width: 100vw;
  }
`;