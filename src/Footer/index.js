import React from "react"
import { Page,Location,LocationText,LocationPlace, Copyright} from "./styles"
import WhatsappIcon from "../images/whatsapp-icone.png";
const Footer = () => (
<>
    <Page>
<Location><LocationText>Endereço:</LocationText>
<LocationPlace>Online para qualquer lugar do mundo!</LocationPlace>

</Location>
<Copyright> Copyright © Antonio Lage | Todos os direitos reservados</Copyright>


    </Page>
    

</>
);

export default Footer;  