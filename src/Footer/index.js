import React from "react"
import { Page,Location,LocationText,LocationPlace, Copyright,PoliticaPrivacidade} from "./styles"
import WhatsappIcon from "../images/whatsapp-icone.png";
import Politica from '../politicadeprivacidade.txt'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Footer = () => (
<>


    <Page>
<Location><LocationText>Endereço:</LocationText>
<LocationPlace>Online para qualquer lugar do mundo!</LocationPlace>

</Location>

<Copyright> Copyright © Antonio Lage | Todos os direitos reservados</Copyright>
<PoliticaPrivacidade href={Politica}>Politica de Privacidade</PoliticaPrivacidade>
    </Page>
    


</>
);

export default Footer;  