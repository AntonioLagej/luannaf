import logo from './logo.svg';
import './GlobalStyles';
import Header from './Header';
import Hero from './Hero'
import About from './About';
import Contato from './Contato';
import Atendimento from './Atendimento';
import Depoimentos from './Depoimentos';
import Abordagem from './Abordagem';
import { AnimationOnScroll } from 'react-animation-on-scroll';


  function App() {
 
    
   
    return ( 
  
   <>
      <Header/>
     
    
        <About/>
        <Hero/>
     
      <Atendimento/>
     
      
       <Contato/>

        <Abordagem/>
     
       <Depoimentos/>
       </>
    );
  }

export default App;
