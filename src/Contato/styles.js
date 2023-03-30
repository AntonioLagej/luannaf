import styled from "styled-components";


export const Wrapper = styled.div`
text-align: center;
color: white;
font-family:'Poppins';
overflow-x: hidden; 
background-color:  #4f632c;
width: 100vw;
left: 100vw;
padding-top: 0vh;
height: fit-content;
padding-right: 5vw;
padding-bottom: 10vh;

@media only screen and (max-width:768px) {
    width: 100%;


top:100vh;
float: none;

   
}
`;
export const Contatosimg = styled.img`
padding-top: 20vh;
height: 30vh;
@media only screen and (max-width:768px) {
    height: 20vh;
    padding-top: 10vh;
   
}

`;

export const Titulo =styled.div`
margin-top: 0;
font-weight: bold;
font-size: 16pt;
`;

export const Paragrafo = styled.div`

font-size: 13pt;
padding-bottom: 10vh;
`;
export const WhatsappIcon=styled.img`
width: 10vh;


`;
export const Linkname=styled.span`
display: block;


`;
export const SocialMedia=styled.a`
display:inline-block;
margin-right: 2vw;
margin-left: 2vw;
color: white;
text-decoration: none;
`; 