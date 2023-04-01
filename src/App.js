import logo from './logo.svg';
import './GlobalStyles';
import Header from './Header';
import Hero from './Hero'
import About from './About';
import Contato from './Contato';
import Footer from './Footer';
import Depoimentos from './Depoimentos';
import Abordagem from './Abordagem';
import RealHero from './RealHero'
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Luanna from './images/luanna.webp'
  function App() {
 
    
   
    return ( 
  
   <>
   
   <FloatingWhatsApp  phoneNumber='5531985768174'  statusMessage='Geralmente responde em 1 hora'accountName='Luanna Ferreira' avatar={Luanna} chatMessage='Olá! Como posso ajudar?'/>
      <Header/>
     <RealHero/>
    
        <About/>
        <Hero/>
       <Contato/>

        <Abordagem/>
     
       <Depoimentos/>
      <Footer/>
       </>
    );
  }

export default App;
