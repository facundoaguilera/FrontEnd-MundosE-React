import logo from './logo.svg';
import './App.scss';
import HeaderF from './components/header/index';
import Section2F from './components/seccion2';
import Section3F from './components/seccion3';
import Section4F from './components/seccion4';
import Section5F from './components/seccion5';
function App() {
  return (
    <div>
      <div>
      <HeaderF/>
      </div>
      <section>
        <Section2F/>
      </section>
      <section>
        <Section3F/>
      </section>
      <section>
        <Section4F/>
      </section>
      <footer>
        <Section5F/>
      </footer>
      
    </div>
    
  );
}

export default App;
