import styled from "styled-components";
import { Link } from "react-scroll";

export const Wrapper = styled.div`

width: 100%;
position: fixed;
display: flexbox;
height: 50px;

background-color: #4f632c;
color: #9fa957;
z-index: 10000;
@media only screen and (max-width:768px){
   top: 0;
   width: 100%;


}
`;
export const MenuItem= styled.li`
padding-top: 0%;
  list-style-type: none;
    cursor: pointer;
    text-align: left;
    padding-left: 0;

`;
export const LogoItem= styled.li`
padding-top:8%;
  list-style-type: none;
    cursor: pointer;
    text-align: left;
    padding-left: 0;

`;

export const LogoImg = styled.img`
&:hover{
        cursor: pointer;
    }
    margin-top: 1vh;
    margin-left: 1vw;
float: left;
height: 30px;
z-index: 99999999;
@media only screen and (max-width:768px){
    z-index: 99999999;
    height: 4vh;
}
`;


export const IconMenu=styled.img`
height:80px;
vertical-align: middle;
margin-bottom: 0px;

`;

export const NavButton=styled.div`
 border-bottom:0px solid black; 
.active{
  
 
}
   margin-top: 2vh;
   padding-right: 7vw !important;
   @media only screen and (max-width:768px){
   display: none;
}
align-self:center;
float: right;
padding-right: 20px;



 &:nth-child(3) {
        margin-left: 20vw;
       
    };
 
    &:hover{
        cursor: pointer;
    
    };
  
  


`;
