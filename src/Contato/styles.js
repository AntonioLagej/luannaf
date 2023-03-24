import styled from "styled-components";


export const Wrapper = styled.div`
text-align: center;
font-family: 'Work Sans';

background: snow;
width: 100vw;
left: 50vw;
padding-top: 15vh;
height: 90vh;
@media only screen and (min-width:768px) {
    width: 30vw;
    padding-top: 15vh;
padding-right: 12vw;
float: right;

   
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

color: black;
text-decoration: none;
`; 