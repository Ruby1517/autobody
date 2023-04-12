import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';
import Home from './components/home/Home';
import RoutePage from './components/route/RoutePage';
import Clients from './components/clients/Clients';
import GapPage from './components/GapPage'
import Estimate from './components/estimate/Estimate';




function App() {  

  return (  
    <div className='app.js'>
       <div>
        <Navbar/>
       </div>
        <Home />
        <About />
        <Services />
        <Clients />
        <GapPage />
        <Contact />        
    </div>      
         
    
  );
}

export default App;
