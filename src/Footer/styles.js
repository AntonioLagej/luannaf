import styled from "styled-components";
export const Page = styled.div`
position: absolute;
width: 100%;
height: 15vh;
padding-top: 10%;
display: block;
bottom: 0;
background-color: aliceblue;
color: black;
@media only screen and(max-width:768px) {
  
    display: block;
    
}
`
export const Location = styled.div`
height: 30px;
color: black;
width: fit-content;
background-color: #b3cec9;
border-radius: 50px;
margin-left: 100px;

@media only screen and(max-width:768px) {
    width: 100%;

    
}
`


export const LocationText = styled.div`
text-align: center;
margin-left: 20px;
margin-right: 20px;
padding-top:0.2rem;
font-size: medium;
@media only screen and(max-width:768px) {
    font-size: 10pt;
    
    float: none;
}
`
export const LocationPlace=styled.div`
text-align: center;
float: left;
margin-left: 20px;
margin-right: 20px;
padding-top:0.2rem;
font-size: small;
@media only screen and(max-width:768px) {
   
}


`;

export const Copyright=styled.div`
text-align: left;
position: absolute;
bottom: 0;
right: 0;
float: right;
font-size: .5rem;

@media only screen and(max-width:768px) {

    font-size:1%;
    position: absolute;
bottom:0;
right: 0;

  
}
`;