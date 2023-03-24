import styled from "styled-components";
export const Wrap= styled.div`
background-color: #b3c0e0;
position: absolute;
top: 5vh;
left: 50vw;
width: 50vw;
height: 95vh;
 @media only screen and (max-width:768px) {
    margin-top: -5vh;
    width: 100vw;
    left: 0vw;
    position: relative;
    
    padding-top: 10%;
} 

`;
export const LivroImage=styled.img`
margin-left: 7vw;
margin-top:-20vh;

@media only screen and (max-width:768px) {
    margin-left: 5vw;
margin-top:0vh;
width: 90vw;
}


`;
export const Texto=styled.div`
padding-top:10vh;
font-size: 1.2rem;
text-align: center;
@media only screen and (max-width:768px) {
    padding-top:0vh;
font-size: 1rem;
text-align: center;
}

`;
export const Titulo= styled.h3`
padding-top: 0vh;
font-size: 1.7rem;
text-align: center;
`;
