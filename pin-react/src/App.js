import logo from './logo.svg';
import './App.scss';
import Header from './components/header/header';
import Section2 from './components/seccion2/seccion2';
import Section3 from './components/seccion3/seccion3';
import Section4 from './components/seccion4/seccion4';
import Section5 from './components/seccion5';
function App() {
  return (
    <div>
      <Header/>
      <Section2/>
      <Section3/>
      <Section4/>
      <footer>
      <Section5/>
      </footer>
      
    </div>
    
  );
}

export default App;
